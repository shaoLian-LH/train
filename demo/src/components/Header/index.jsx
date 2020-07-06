import React, { useEffect } from 'react';
import { Menu, Col, Button, Dropdown } from 'antd';
import { PicRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import DBD from '../../image/header.PNG';
import './style.scss';
const Header = () => {

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{ addScrollEvent() });
        return ()=>{
            window.removeEventListener("scroll", ()=>{ addScrollEvent() });
        }
    })

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

    const menuContent = ( style ) => (
        <Menu mode = { style } className = "header-menu">
            <Menu.Item className="sl-menu-item">
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item className="sl-menu-item">
                <Link to="/news">资讯</Link>
            </Menu.Item>
            <Menu.Item className="sl-menu-item">
                <Link to="/about">关于我们</Link>
            </Menu.Item>
        </Menu>
    )

    return (
        <div id = "header-main-div">
            <Col xs = { 0 } sm = { 24 } md = { 24 } lg = { 24 } xl = { 24 } xxl = { 24 }>
                <Link 
                    to = "/" 
                    style = {{position: "relative", width: "100%", display: "inline-block"}}
                >
                    <p className = "header-img"><img src={ DBD } alt="icon"/> DBD</p>
                    { menuContent("horizontal") }
                </Link>
            </Col>
            <Col xs = { 24 } sm = { 0 } md = { 0 } lg = { 0 } xl = { 0 } xxl = { 0 }>
                <p className = "header-img">DBD</p>
                <Dropdown className = "header-dropdown" overlay={ menuContent("vertical") } placement="bottomCenter">
                    <Button><PicRightOutlined /></Button>
                </Dropdown>
            </Col>
        </div>
    )
}

export default Header;