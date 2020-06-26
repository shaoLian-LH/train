import React from 'react';
import { Route , HashRouter} from 'react-router-dom';
import { RouterConfig } from '../../config/routerConfig';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BackTop } from 'antd';
import './style.scss';
function Main(){
    return (
        <div id="main">
            <HashRouter>
                <Header />
                {
                    RouterConfig.map((item, index)=>{
                        return <Route key={ index } path = { item.path } exact={item.exact} component = { item.component } />
                    })
                }
                <BackTop />
                <Footer/>
            </HashRouter>
        </div>
    )
}
export default Main;