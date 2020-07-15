import React, { useEffect, useState } from 'react';
import Request from '../../../config/Fetch';
import { Link } from 'react-router-dom';
import './currentNews.scss';
import SubTitle from '../../../components/SubTitle';
import LazyLoad from 'react-lazyload';
function CurrentNews(){

    const [ initial, setInitial ] = useState(false);
    const [ newsList, setNewsList ] = useState([]);
    // eslint-disable-next-line
    const [ pageNumber, setPageNumber ] = useState(3);
    useEffect(()=>{
        if(!initial) {
            setInitial(true);
            fetchData();
        }
        // eslint-disable-next-line
    },[ newsList ])


    const fetchData = ()=>{
        Request.get(`news?page=${pageNumber}`)
        .then((res)=>{
            setNewsList(res.data.list);
        })
    }

    return (
        <div id = "current-news-main-div">
            <SubTitle addBreak = {false} title = { "最新资讯" } />
            {
                newsList.length !== 0 ? newsList.map((item, index)=>{
                    return (
                        <Link key = { `news-link-${index}` } to = "/detail"> 
                            <div key = { `news-item-${index}` } className = "news-item">
                                <LazyLoad height = { 120 }>
                                    <img className = "news-item-img" src = { item.imgLink } alt=""/>
                                </LazyLoad>
                                <p className = "news-title">{ item.title }</p>
                                <p className = "news-desc">{ item.desc }</p>
                            </div>
                        </Link>
                    )
                }):''
            }
        </div>
    )
}
export default CurrentNews;