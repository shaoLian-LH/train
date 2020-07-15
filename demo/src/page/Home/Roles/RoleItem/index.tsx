import React, { FC } from 'react';
import LazyLoad from 'react-lazyload';
import './roleItem.scss';
export interface RoleProps{
    imgLink: string,
    name: string,
    desc: string,
    tips: string
}

const RoleItem: FC<RoleProps> = (props)=>{
    const {
        imgLink,
        name,
        desc,
        tips
    } = props;
    return (
        <div id = "role-item-main-div">
            <LazyLoad>
                <img className = "role-img" src={ imgLink } alt={ imgLink } />
            </LazyLoad>
            <p className = "role-name">{ name }</p>
            <p className = "role-desc">{ desc }</p>
            <p className = "role-tips">{ tips }</p>
        </div>
    )
}

export default RoleItem;