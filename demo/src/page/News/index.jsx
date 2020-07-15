import React, { useEffect, useState } from 'react';
import Request from '../../config/Fetch';
import { Link } from 'react-router-dom';
import './news.scss';
import NewsItem from './NewsItem';
import { Pagination } from 'antd';
import SubTitle from '../../components/SubTitle';

function News (){

    const [ newsList, setNewsList ] = useState([]);
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ initial, setInitial ] = useState(false);

    useEffect(()=>{
        if(!initial){
            setInitial(true);
            initData();
        }
        // eslint-disable-next-line
    }, [ newsList ])

    const initData = (num)=>{
        let target = num === undefined ? `news?page=${pageNumber}` : `news?page=${num}`;
        Request.get(target)
        .then((res)=>{
            setNewsList(res.data.list);
        })
    }

    const changePage = (value) => {
        setPageNumber(value);
        initData(value);
    } 

    return (
        <div id = "news-main-div">
            <SubTitle title = { "最新新闻" } />
            {
                newsList.length !== 0 && newsList.map((item, index)=>{
                    return (
                        <Link 
                            key = { `news-a-${index}` }
                            to = "/detail"
                        >
                            <NewsItem 
                                key = { index }
                                imgLink = { item.imgLink } 
                                title = { item.title } 
                                description = { item.desc }
                            />
                        </Link>
                    );
                })
            }
            <Pagination 
                current={ pageNumber } 
                onChange={ (page)=>{ changePage(page) } } 
                total = { 24 } 
                size = { 8 }
            />
        </div>
    )
}

export default News;