import React, { FC, useState, useEffect } from 'react';
import { Icon } from 'antd';
import { IListProps } from '@/models/shopping.d';
import './style.scss';
export interface ItemProps {
    item: IListProps,
    add?: Function,
    minus?: Function
}
type ClickAction = "minus" | "plus";

const ShoppingItem: FC<ItemProps> = (props)=>{
    const { item, add, minus } = props;
    const [ curNumber, setCurNumber ] = useState(0);
    useEffect(()=>{

    },[ curNumber ])
    const handleClick = (e: ClickAction)=>{
        switch(e){
            case 'minus': {
                if( curNumber !== 0 ) {
                    let temp = (curNumber - 1 > 0) ? (curNumber - 1 ) : 0;
                    setCurNumber(temp);
                }
                if( minus && typeof minus === 'function') {
                    minus();
                }
            };break;
            case 'plus': {
                if( curNumber < item.inventory ) {
                    let temp = (curNumber + 1 <= item.inventory ) ? (curNumber+1) : item.inventory; 
                    setCurNumber(temp);
                } 
                if(add && typeof add === 'function') {
                    add();
                }
            };break;
            default : {

            }
        }
    }
    return (
        <div className = "shopping-item-main-div">
            <img className = "shopping-item-img" src={ require(`@/assets/${item.imgName}`) } alt={ item.name } />
            <div className = "shopping-item-pre-view">
                <p className = "shoppping-item-price">{ item.price }</p>
                <p className = "shopping-item-name">{ item.name }</p>
            </div>
            <div className = "shopping-item-action">
                <Icon 
                    className = { curNumber === 0 ? "shopping-item-icon icon-left disabled" : "shopping-item-icon icon-left"  }  
                    type = "minus-square" 
                    onClick = { () => { handleClick("minus") } }
                />
                <p className = "shopping-item-cur">{ curNumber }</p>
                <Icon 
                    className = { item.inventory > curNumber ? "shopping-item-icon icon-right" : "shopping-item-icon icon-right disabled"  } 
                    type="plus-square" 
                    onClick = { ()=> { handleClick("plus")  } }
                />
            </div>
        </div>
    )
}

export default ShoppingItem;