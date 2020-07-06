import React, { Component } from 'react';
import { connect } from 'dva';
import { Dispatch, AnyAction } from 'redux';
import  ShoppingItem from './shoppingItem';
import { d } from '@/utils';
import { IListProps } from '@/models/shopping.d';
import './style.scss';
interface ShoppingArrayProps {
    list: [],
    types: []
}
interface Props {
    dispatch: Dispatch<AnyAction> | null;
    list?: IListProps[],
    type?: [],
    handleAdd?: Function,
    shopping?: ShoppingArrayProps
}


class Shopping extends Component<Props> {
    state = {
        list: [],
        type: [],
        handleAdd: (arg1: any) => {},
        handleMinus: (arg1: any) => {}
    }
    componentDidMount (){
        if(this.state.list.length === 0) {
            const { dispatch } = this.props; 
            if(dispatch) {
                dispatch({
                    type: 'shopping/getList'
                });
            }      
        }
    }
    
    render(){
        const { list, type, handleAdd, handleMinus } = this.state;
        const { dispatch } = this.props; 
        this.state.handleAdd = (id) => {
            if(dispatch) {
                dispatch({
                    type: 'cart/add',
                    payload: {
                        id: id
                    }
                });
            }
        }
        this.state.handleMinus = (id) => {
            if(dispatch) {
                dispatch({
                    type: 'cart/minus',
                    payload: {
                        id: id
                    }
                });
            }
        }
        return (
            <div id = "shopping-main-div">
                <div className = "shopping-list-show">
                    { 
                        ( list && list.length > 0 ) && 
                        list.map((item : IListProps, index)=>{
                            return <ShoppingItem 
                                        key = { index } 
                                        item = { item }  
                                        add = { ()=> { handleAdd(item.id) } } 
                                        minus = { ()=> { handleMinus(item.id) } }
                                    />
                        })
                    }
                </div>        
            </div>
        )
    }
}
const mapStateToProps = (props: any) => ({
    shopping: props.shopping
})
export default connect(mapStateToProps)(Shopping);