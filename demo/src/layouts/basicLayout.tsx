import React, { FC, createContext, useState, Dispatch, useRef, MutableRefObject } from 'react';
import Header from '@C/Header';
import Footer from '@C/Footer';
import Login from '@/page/Home/Login';
import { BackTop } from 'antd';
import './style.scss';
export interface IUserProps {
    id?: string | null,
    token?: string | null
}
export interface IBasicContextProps {
    isLogin: boolean,
    changeIsLogin: Dispatch<boolean>,
    user: MutableRefObject<IUserProps>
} 
export const BasicContext = createContext({} as IBasicContextProps);
const BasicLayout:FC = ( props )=>{
    const { children } = props;
    const [ isLogin, changeIsLogin ] = useState(false);
    const user = useRef({id: null, token: null} as IUserProps);
    return (
        <BasicContext.Provider 
            value = {{
                "isLogin": isLogin,
                "changeIsLogin": changeIsLogin,
                "user": user
            }}
        >
            <div id="main">
                <Header />
                    { children }
                    {
                        ( isLogin && user.current.id === null ) 
                        ? <Login /> 
                        : ''
                    }
                    
                <BackTop />
                <Footer/>
            </div>
        </BasicContext.Provider>
    )
}
export default BasicLayout;