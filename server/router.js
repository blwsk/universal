'use strict';
require('babel-core/register');

import express from 'express';
import api from './api.js';
import React from 'react/addons';
import Router from 'react-router';
import routes from '../src/routes.jsx';

const r = express.Router();
const Route = Router.Route;
const Link = Router.Link;
const RouteHandler = Router.RouteHandler;


r.use( function(req, res, next) {
  next();
});

r.get('/api/all', api);

r.get('*', function(req, res, next) {

  let location = req.url;

  Router.run(routes, location, function (Handler) {

    let markup = React.renderToString(<Handler/>);

    // production
    if (process.env.NODE_ENV == 'production') {
      res.render('template', {
        title: 'Universal App',
        body: markup,
        assetRoot: '//s3.amazonaws.com/universal-demo/'
      });
    }

    // local dev
    else {
      res.render('template', {
        title: 'Universal App',
        body: markup,
        assetRoot: '/build/'
      });
    }
  });
});


export default r;