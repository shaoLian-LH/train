import React, { FC } from 'react';
import { connect, Dispatch } from 'dva';
import { IListProps } from '@/models/shopping.d';

interface CartProps {
    products?: [],
    subtotal?: number ,
    onCheckout?: ()=>void;
    loading?: boolean;
    checking?: boolean;
}

const Cart: FC<CartProps> = (props) => {
    const { products, subtotal, onCheckout, loading, checking } = props;
    const nodes = products ? products.map((item : IListProps)=>{
        <li key = { item.id }>
            {item.name} {item.price} x {item.quantity}
        </li>
    }): '';
    return (
        <div>
            <h3>Your Cart</h3>
            <ul>{ nodes }</ul>
            <div>Total: { subtotal }</div>
            <div>
                {checking && <div style={{color: 'red'}}>Checking ...</div>}
            <button onClick={ onCheckout } disabled={ subtotal && subtotal <= 0.00 || loading}>Checkout</button>
            </div>
        </div> 
    )
}
interface IMapProps {
    cart: any,
    shopping: any,
    loading: any
}
const mapStateToProps = ({cart, shopping, loading}: IMapProps) => ({
    products: cart.added.map((id: any) => ({...shopping.byId[id], quantity: cart.quantities[id]})),
    subtotal: cart.added.reduce((amount: any, id: any) => shopping.byId[id].price * cart.quantities[id] + amount, 0).toFixed(2),
    loading: loading.models['cart'],
    checking: loading.effects['cart/checkout']
  })
  
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onCheckout: () => dispatch({
        type: 'cart/checkout'
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
