import React from 'react';
import { connect } from 'dva';

const Cart = props => {
  const { products, subtotal, onCheckout, loading, checking } = props;
  const nodes = products.map((item, key) => (
    <li key={key}>
      {item.title} {item.price} x {item.quantity}
    </li>
  ));
  return (
    <div>
      <h3>Your Cart</h3>
      <ul>{nodes}</ul>
      <div>Total: {subtotal}</div>
      <div>
        {checking && <div style={{color: 'red'}}>Checking ...</div>}
        <button onClick={onCheckout} disabled={subtotal <= 0.00 || loading}>Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({cart, products, loading}) => ({
  products: cart.added.map(id => ({...products.byId[id], quantity: cart.quantities[id]})),
  subtotal: cart.added.reduce((amount, id) => products.byId[id].price * cart.quantities[id] + amount, 0).toFixed(2),
  loading: loading.models['cart'],
  checking: loading.effects['cart/checkout']
})

const mapDispatchToProps = (dispatch) => ({
  onCheckout: () => dispatch({
    type: 'cart/checkout'
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
