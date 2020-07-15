import React from 'react';
import ReactDOM from 'react-dom';
import Main from './page/Main';
import './style/global.scss';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

serviceWorker.unregister();
