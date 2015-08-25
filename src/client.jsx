import React from 'react/addons';
import Router from 'react-router';
const Route = Router.Route;
const Link = Router.Link;
const RouteHandler = Router.RouteHandler;

import routes from './routes.jsx';

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('application'));
});
