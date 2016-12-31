import { Router, Route, Link, hashHistory } from 'react-router'
import Frame from '../frame';
import React from 'react';

import order from './order.js';
import shop from './shop.js';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={Frame}>
      {
        // route配置
        [
          ...order,
          ...shop
        ].map((item,index)=>(
          <Route key={index} path={item.path} component={item.component} />
        ))
      }
    </Route>
  </Router>
)
