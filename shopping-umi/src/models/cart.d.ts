import { Effect } from 'dva';
import { Reducer } from 'redux';


export interface ICartModelType {
    namespace: string,
    state: {},
    effects: {
        add: Effect;
        minus: Effect;
        checkout: Effect;
    },
    reducers: {
        addToCart: Reducer,
        removeFromCart: Reducer,
        checkoutCompleted: Reducer
    }
}