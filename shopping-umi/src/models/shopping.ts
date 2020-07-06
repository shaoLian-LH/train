import { List } from '@/service/figure';
import { IShoppingModelType, IShoppingState, IListProps } from './shopping.d';
import { normalize, schema } from "normalizr";

const list = new schema.Entity('list');


export interface IEntityProps {
    entities: Object[],
    results: []
}

const shoppingModel: IShoppingModelType = {
    namespace: 'shopping',
    state: {
        result: [],
        byId: {}
    },
    effects: {
        *getList({ payload, callback }, { put, call }){
            const response = yield call(List);
            yield put({
                type: "onGetListSuccess",
                payload: normalize(response.list, [list])
            });
            if( callback && typeof callback === 'function' ) {
                callback(response);
            }
        }
    },
    reducers: {
        onGetListSuccess( state, { payload } ){
            return {
                ...state,
                byId: payload.entities.list,
                result: payload.result
            }
        },
        decInventory: (state, { payload: { id } }) => {
            const selected = state.byId[id];
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [id]: { ...selected, inventory: selected.inventory - 1 }
                }
            };
        },
        addInventory: (state, { payload: { id } }) => {
            const selected = state.byId[id];
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [id]: { ...selected, inventory: selected.inventory + 1 }
                }
            };
        },
    }
}

export default shoppingModel;