'use strict';
require('babel-core/register');

import express from 'express';
import React from 'react/addons';

const router = express.Router();

const App = require('../src/app.jsx');
const markup = React.renderToString(<App />);

router.use( function(req, res, next) {
  next();
});

router.get('*', function(req, res, next) {

  res.render('template', {
    title: 'Universal App',
    body: markup
  });
});

export default router;