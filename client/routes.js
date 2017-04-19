import React from 'react';
import { IndexRoute, Route, browserHistory } from 'react-router';
import App from './containers/App.js';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Demos from './components/Demos';
import HowToBuy from './components/HowToBuy';
import NoMatch from './components/NoMatch';

export default (
  <Route>
    <Route path="/" component={App} >
      <IndexRoute component = {Home} />
      <Route path='/about_us' component={AboutUs} />
      <Route path='/products' component={Products} />
      <Route path='/demos' component={Demos} />
      <Route path='/how_to_buy' component={HowToBuy} />
    </Route>
    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)
