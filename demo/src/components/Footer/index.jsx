import React from 'react';
import './style.scss';
import Qqgroup from '../../image/qqgroup.png';
import LazyLoad from 'react-lazyload';
import { AimOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';
function Footer(){
    return (
        <div id = "footer-main-div">
            <div className = "footer-content">
                <ul className = "footer-group-left">
                    <li className = "group-li">
                        <AimOutlined className = "li-img" />&nbsp;&nbsp;
                        <p className = "li-title">闽江学院</p>
                    </li>
                    <li className = "group-li">
                        <MessageOutlined className = "li-img" />&nbsp;&nbsp;
                        <a className = "li-title" href={`mailto:shaolianfk@gmail.com?subject=标题&body=内容`}>shaolianfk@gmail.com</a>
                    </li>
                    <li className = "group-li">
                        <PhoneOutlined className = "li-img" />&nbsp;&nbsp;
                        <a className = "li-title" href="tel:">400-123-4567</a>
                    </li>
                </ul>
                <ul className="footer-group-right">
                    <LazyLoad height = { 180 }>
                        <img className ="qq-img" src = { Qqgroup } alt = "qq"/> 
                    </LazyLoad>
                    <p className = "li-title">扫一扫，加入实训群</p>
                </ul>
            </div>
            <div className = "copyright-div">网站为练习所用&copy;<a href="https://shaolianblog.top/blog" rel="noopener noreferrer" target="_blank">邵莲</a></div>
        </div>
    )
}

export default Footer;