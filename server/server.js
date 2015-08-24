'use strict';
require('babel-core/register');

const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();

// templates
app.set('views', './static')
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static('build'));

// routes
app.use('*', require('./router.js'));

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});