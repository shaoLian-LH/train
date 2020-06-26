import React, { useEffect } from 'react';
import './about.scss';
import { AimOutlined, MessageOutlined, PhoneOutlined } from '@ant-design/icons';
let map = null;
const { BMap, BMAP_ANCHOR_BOTTOM_LEFT, BMAP_UNIT_METRIC, BMAP_ANCHOR_TOP_LEFT, BMAP_ANCHOR_BOTTOM_RIGHT } = window
function About (){
    useEffect(()=>{
        initMap();
        // eslint-disable-next-line
    },[]);
    const initMap = () => {
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMapOverlay();//向地图添加覆盖物
    }   

    const createMap = ()=>{ 
        map = new BMap.Map("map"); 
        map.centerAndZoom(new BMap.Point(119.189112,26.073687),14);
    }

    const setMapEvent = ()=>{
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
    }

    const addClickHandler = (target,window)=>{
        target.addEventListener("click",function(){
            target.openInfoWindow(window);
        });
    }
    const addMapOverlay = ()=>{
        let markers = [
            {content:"",title:"闽江学院",imageOffset: {width:-46,height:-21},position:{lat:26.073946,lng:119.174452}}
        ];
        for(let index = 0; index < markers.length; index++ ){
            let point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
            let marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
                imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
            })});
            let label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
            let opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
            };
            let infoWindow = new BMap.InfoWindow(markers[index].content,opts);
            marker.setLabel(label);
            addClickHandler(marker,infoWindow);
            map.addOverlay(marker);
        };
    }
    //向地图添加控件
    const addMapControl = ()=>{
        let scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_METRIC);
        map.addControl(scaleControl);
        let navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:3});
        map.addControl(navControl);
        let overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:false});
        map.addControl(overviewControl);
    }

    return (
        <div id = "about-main-div">
             <div id = "map"></div>
             <div className = "desc-div">
                <p className = "desc-p">闽江学院（Minjiang University），简称“闽院（MJU）”，坐落于福建省福州市。学校是由福建省人民政府举办的一所公办高等院校、福建省重点建设高校、“服务国家特殊需求”专业硕士学位研究生教育试点高校、福建省一流学科建设高校、福建省“首批深化创新创业教育改革示范高校”、入选国家“双万计划”。学校前身是创办于1958年的福州师范高等专科学校和创办于1984年的闽江职业大学。2018年1月，学校新增为“福建省2018-2020年硕士学位授予立项建设名单”。</p>
                <ul className = "group-ul">
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
             </div>
        </div>
    );
}

export default About;