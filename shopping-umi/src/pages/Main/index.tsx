import React, { FC, Fragment } from 'react';
import Shopping from '../shopping';
import Cart from '@/components/cart';
const Main: FC = ()=>{
    return (
        <Fragment>
            <Cart />
            <Shopping />
        </Fragment>
    )
}

export default Main;