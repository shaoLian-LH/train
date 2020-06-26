import { normalize, schema } from "normalizr";

import shop from "../api/shop";

// 关于normalizr库，与官方示例直接用byId, allIds去组织还别扭
// 此处仅仅是为了尝试下引入这个库的效果，它的用法还有待深入
// 但是不论哪一种写法，无揭示了一个问题，如果state需要相关引用，
// 根据ID组织状态是一个合理的方式。
const products = new schema.Entity("products");

export default {
  namespace: "products",
  state: {
    result: [],
    byId: {}
  },
  effects: {
    *query(action, { call, put }) {
      const res = yield call(shop.getProducts);
      yield put({
        type: "setProducts",
        payload: normalize(res.data, [products])
      });
    }
  },
  reducers: {
    setProducts: (state, { payload }) => {
      return {
        ...state,
        byId: payload.entities.products,
        result: payload.result
      };
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
    }
  }
};
