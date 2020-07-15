import React, { FC } from 'react';
import LazyLoad from 'react-lazyload';
export interface ItemProps{
    title: string;
    description: string;
    imgLink: string;
}
export const NewsItem: FC<ItemProps> = (props)=>{
    const {
        title,
        description,
        imgLink
    } = props;
    return (
        <div id = "news-item-main-div">
            <LazyLoad height = { 60 }>
                <img className = "news-item-img" src={ imgLink } alt={ imgLink }/>
            </LazyLoad>
            <div className = "news-item-content">
                <p className = "news-item-category">{ title }</p>
                <p className = "news-item-description" >{ description }</p>
            </div>
        </div>
    )
}

export default NewsItem;