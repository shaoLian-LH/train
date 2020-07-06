import React, { useEffect, useState } from 'react';
import Request from '../../../config/Fetch';
import RoleItem from './RoleItem';
import SubTitle from '../../../components/SubTitle';
function Roles(){

    const [ roleList, setRoleList ] = useState([]);
    const [ initial, setInitial ] = useState(false);

    useEffect(()=>{
        if(!initial){
            setInitial(true);
            fetchData();
        }
        // eslint-disable-next-line
    }, [ roleList ])

    const fetchData = ()=>{
        Request.get('roles')
        .then((res)=>{
            setRoleList(res.data.roles);
        })
    }

    return (
        <div id="role-main-div">
            <SubTitle addBreak = { false } title = { "最近更新" }></SubTitle>
            {
                roleList.length !== 0 ? roleList.map((item, index)=>{
                    return (
                        <RoleItem 
                            key = { `role-${index}` } 
                            imgLink = { item.imgLink } 
                            name = { item.name } 
                            desc = { item.desc } 
                            tips = { item.tips } 
                        />
                    )
                }):''
            }
        </div>
    )
}

export default Roles;