import React, { createContext } from 'react';
import { Route , HashRouter} from 'react-router-dom';
import { RouterConfig } from '@/config/routerConfig';
import BasicLayout from '@/layouts/basicLayout';
import './style.scss';
export const MainContext = createContext(null);
function Main(){
    return (
        <HashRouter>
            <BasicLayout>
                {
                    RouterConfig.map((item, index)=>{
                        return <Route key={ index } path = { item.path } exact={item.exact} component = { item.component } />
                    })
                }
            </BasicLayout>
        </HashRouter>
    )
}
export default Main;