import React, { useEffect, useContext, useState } from 'react';
import { Menu, Col, Button, Dropdown } from 'antd';
import { PicRightOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { BasicContext } from '@/layouts/basicLayout';
import DBD from '@/image/header.png';
import './style.scss';
const Header = () => {
    const context = useContext(BasicContext);
    const history = useHistory();
    const [ isFresh, changeIsFresh ] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{ addScrollEvent() });
        return ()=>{
            window.removeEventListener("scroll", ()=>{ addScrollEvent() });
        }
    },[ context, isFresh ])

    const addScrollEvent = ()=>{
        let headerDiv = document.getElementById('header-main-div');
        let height = headerDiv.getBoundingClientRect().height;
        if( window.pageYOffset - height > 40 ) {
            if (!headerDiv.classList.contains("sticky")) {
                headerDiv.classList.add("sticky");
            } 
        } else {
            if (headerDiv.classList.contains("sticky")) {
                headerDiv.classList.remove("sticky");
            }   
        }
    }

    const onOpenChange = (e)=>{
        history.push(e.key);
    }

    const menuContent = ( style ) => (
        <Menu 
         mode = { style } 
         className = "header-menu" 
         onClick = { onOpenChange }
        >
            <Menu.Item key = "/" className="sl-menu-item">
                首页
            </Menu.Item>
            <Menu.Item key = "/news" className="sl-menu-item">
                资讯
            </Menu.Item>
            <Menu.Item key = "/about" className="sl-menu-item">
                关于我们
            </Menu.Item>
        </Menu>
    )

    const onLoginClick = ()=>{
        let isLogin = context.isLogin;
        context.changeIsLogin(!isLogin);
    }

    const loginBtn = ()=>{
        return (
            <Button 
                type = "ghost"
                size = "middle" 
                className = "loginBtn" 
                onClick = { ()=>{ onLoginClick() } }
            >登录</Button>
        )
    }

    const logout = ()=>{
        let temp = {
            id: null, 
            token: null
        }
        context.user.current = temp;
        changeIsFresh(!isFresh);
    }

    const loginTip = ()=>{
        return <p className = "logout" onClick = { ()=>{ logout(); } }>{ `欢迎您，${ context.user.current.id }` }</p> 
    }

    return (
        <div id = "header-main-div">
            <Col xs = { 0 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } xxl = { 24 }>
                <Link 
                    to = "/" 
                    className = "header-img-link"
                >
                    <p className = "header-img"><img src={ DBD } alt="icon"/> DBD</p>
                </Link>
                <div className = "header-right-div">
                    { menuContent("horizontal") }
                    { 
                        context.user.current.id === null 
                        ? loginBtn()
                        : loginTip()
                    }
                </div>
            </Col>
            <Col xs = { 24 } sm = { 0 } md = { 0 } lg = { 0 } xl = { 0 } xxl = { 0 }>
                <p className = "header-img">DBD</p>
                <div className = "header-right-div">
                    { 
                        context.user.current.id === null 
                        ? loginBtn()
                        : loginTip()
                    }
                    <Dropdown className = "header-dropdown" overlay={ menuContent("vertical") } placement="bottomCenter">
                        <Button><PicRightOutlined /></Button>
                    </Dropdown>
                </div>
            </Col>
        </div>
    )
}

export default Header;