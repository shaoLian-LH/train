import shop from "../api/shop";

const initialState = {
    added: [],
    quantities: {
    }
  }
export default {
  namespace: "cart",
  state: initialState,
  effects: {
    *add({payload: { id }}, { call, put, select }) {
      const product = yield select(state => state.products.byId[id]);
      console.log('product', product);
      if (product.inventory > 0) {
        yield put({
          type: 'products/decInventory', 
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
    *checkout(action, {call, put, select}) {
      const { cart } = yield select();
      console.log("checkout cart", cart);
      const res = yield call(shop.buyProducts, cart);
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
        added: state.added.includes(id) ? [...state.added] : [...state.added, id],
        quantities: {
          ...state.quantities,
          [id]: (state.quantities[id] || 0) + 1
        }
      }
    },
    checkoutCompleted: () => initialState
  }
};

