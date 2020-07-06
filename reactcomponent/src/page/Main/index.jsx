import React, { Component } from 'react';
import { Route , HashRouter} from 'react-router-dom';
import { BackTop } from 'antd';
import RouterConfig from '../../config/RouterConfig';
import Header from '../../components/Header';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HashRouter>
                <Header />
                {
                    RouterConfig.map((item, index)=>{
                        if(item.component) {
                            return <Route key={ index } path = { item.path } exact={item.exact} component = { item.component } />
                        } else if(item.routes){
                            return item.routes.map((item, index) => {
                                return <Route key={ index+1 } path = { item.path } exact={item.exact} component = { item.component } />
                            })
                        } else {
                            return null;
                        }
                    })
                }
                <BackTop />
            </HashRouter>
        );
    }
}
 
export default Main;