import React from 'react';
import { connect } from 'dva';
import { d } from '../../utils';

const ProductList = props => {
  const { products, addToCart } = props;
  const list = (products || []).map((item, key) => (
    <li key={key}>
      <div>
        <span>{item.title}</span>{'-'}
        <span>${item.price}</span>{' '}
        <span>x{item.inventory}</span>
      </div>
      <div>
        <button onClick={() => addToCart(item.id)} disabled={!item.inventory}>添加购物车</button>
      </div>
    </li>
  ));
  return (
    <div>
      <h3>Products</h3>
      <ul>
        {list}
      </ul>
    </div>
  );
};

const mapStateToProps = ({products}) => ({
  products: d(products.byId, products.result)
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch({
    type: 'cart/add',
    payload: {
      id
    }
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
