'use strict';
require('babel-core/register');

import express from 'express';
import React from 'react/addons';

const router = express.Router();

router.use( function(req, res, next) {
  next();
});

const Button = require('../src/button.jsx');
const markup = React.renderToString(<Button count={0} />);

router.get('*', function(req, res, next) {

  res.render('template', {
    title: 'Universal App',
    body: markup,
    assetRoot: 'build'
  });
});

export default router;