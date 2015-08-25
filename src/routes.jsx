import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';

import App from './app.jsx';
import One from './components/one.jsx';
import Two from './components/two.jsx';
import Three from './components/three.jsx';

const routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="one" handler={One} />
    <Route name="two" path="two" handler={Two} />
    <Route name="three" path="three" handler={Three} />
  </Route>
);

export default routes;