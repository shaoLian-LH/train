import { BuySomeThing } from '@/service/figure';
import { ICartModelType } from './cart.d';

const initialState = {
    added: [],
    quantities: {}
}
export const CartModel: ICartModelType = {
    namespace: "cart",
    state: initialState,
    effects: {
        *add({payload: { id }}, { call, put, select }) {
            const product = yield select((state: any) => state.shopping.byId[id]);
            if (product.inventory > 0) {
                yield put({
                    type: 'shopping/decInventory', 
                    payload: {
                        id
                    }
                })
                yield put({
                    type: 'addToCart',
                    payload: {
                        id
                    }
                })
            }
        },
        *minus({payload: { id }}, { call, put, select }) {
            const product = yield select((state: any) => state.shopping.byId[id]);
            if (product.inventory > 0) {
                yield put({
                    type: 'shopping/addInventory', 
                    payload: {
                        id
                    }
                })
                yield put({
                    type: 'removeFromCart',
                    payload: {
                        id
                    }
                })
            }
        },
        *checkout(action, {call, put, select}) {
            const { cart } = yield select();
            console.log("checkout cart", cart);
            const res = yield call(BuySomeThing, cart);
            yield put({
                type: "checkoutCompleted",
                payload: res
            });
        }
    },
    reducers: {
        addToCart: (state, { payload: { id } }) => {
            return {
                ...state,
                added: state.added.includes(id) ? [ ...state.added ] : [...state.added, id],
                quantities: {
                    ...state.quantities,
                    [id]: (state.quantities[id] || 0) + 1
                }
            }
        },
        removeFromCart: (state, { payload: { id } }) => {
            let nextMono = (state.quantities[id] || 0) - 1 < 0 ? 0 : (state.quantities[id] || 0) - 1
            let addedList = [...state.added]
            if( nextMono === 0 ) {
                addedList = addedList.splice(addedList.indexOf(id), 1);
            }
            return { 
                ...state,
                added: addedList,
                quantities: {
                    ...state.quantities,
                    [id]: nextMono
                }
            }
        },
        checkoutCompleted: () => initialState
    }
}

export default CartModel;