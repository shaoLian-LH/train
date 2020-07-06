import React, { Component } from 'react';
import { Tabs } from 'antd';

import GitHot from '../GitHot';
const { TabPane } = Tabs;
class MainTab extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={ <span>ALL</span> } key="1" >
                        <GitHot target="ALL"/>
                    </TabPane>
                    <TabPane tab={ <span>JAVASCRIPT</span> } key="2" >
                        <GitHot target="JAVASCRIPT"/>
                    </TabPane>
                    <TabPane tab={ <span>RUBY</span> } key="3" >
                        <GitHot target="RUBY"/>
                    </TabPane>
                    <TabPane tab={ <span>JAVA</span> } key="4" >
                        <GitHot target="JAVA"/>
                    </TabPane>
                    <TabPane tab={ <span>CSS</span> } key="5" >
                        <GitHot target="CSS"/>
                    </TabPane>
                </Tabs>
            </div> 
        );
    }
}
 
export default MainTab;