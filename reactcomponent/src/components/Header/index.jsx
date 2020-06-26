import React, { useEffect } from 'react';
import { Menu, Col } from 'antd';
import { Link } from 'react-router-dom';
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
                <Link to="/">GTIHOT</Link>
            </Menu.Item>
            <Menu.Item className="sl-menu-item">
                <Link to="/battle">BATTLE</Link>
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
                    <p className = "header-img">GTIHOT</p>
                    { menuContent("horizontal") }
                </Link>
            </Col>
        </div>
    )
}

export default Header;