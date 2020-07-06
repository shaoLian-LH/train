import { Effect } from 'dva';
import { Reducer } from 'redux';

export type FigureTypes = 'xsmall' | 'small' | 'middle';

export interface IListProps{
    id: number, 
    name: string, 
    price: number, 
    inventory: number,
    imgName: string,
    type: FigureTypes,
    quantity?: any
}
export interface ITypeProps{
    id: number, 
    name: string, 
    type: FigureTypes
}
export interface IShoppingState {
    result: [],
    byId: {}
}

export interface IShoppingModelType {
    namespace: string,
    state: IShoppingState,
    effects: {
        getList: Effect;
    },
    reducers: {
        onGetListSuccess: Reducer;
        decInventory: Reducer;
        addInventory: Reducer;
    }
}