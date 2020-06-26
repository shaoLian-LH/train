import React, { useEffect, useState } from 'react';
import { Carousel } from 'antd';
import Request from '../../../config/Fetch';
import './banner.scss';

function Banner(){
    const [ initial, setInitial ] = useState(false);
    const [ bannerList, setBannerList ] = useState([]);

    useEffect(()=>{
        if(!initial) {
            setInitial(true);
            fetchData();
        }
        // eslint-disable-next-line
    },[ bannerList ])

    const fetchData = ()=>{
        Request.get("banners")
        .then((res)=>{
            setBannerList(res.data.banners);
        })
    }


    return (
        <div id="banner-main-div">
            {
                bannerList.length !== 0 ?<Carousel autoplay>
                    {
                        bannerList.map((item, index)=>{
                            return (
                                <img key = { `img-${index}` } className = "banner-img" src={ item } alt={ item } />
                            );
                        })
                    }                    
                </Carousel>: ''
            }
        </div>
    )
}

export default Banner;
