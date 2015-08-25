import React from 'react';
import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

import Menu from './menu.jsx';


const App = React.createClass({

  render() {
    return (
      <div className="wrapper">
        <Menu />
        <RouteHandler />
      </div>
    );
  }
});

export default App;