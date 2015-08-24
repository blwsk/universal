'use strict';

const fs = require('fs');
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const webpack = require('webpack-stream');
const s3 = require('gulp-s3');

gulp.task('aws', function() {
  var awsConfig = JSON.parse(fs.readFileSync('./config/aws.json'));
  return gulp.src('build/**')
    .pipe(s3(awsConfig));
});

gulp.task('webpack', function() {
  return gulp.src('src/app.jsx')
    .pipe(webpack({
      watch: true,
      watchOptions: {
        aggregateTimeout: 200
      },
      output: {
        filename: 'client.js'
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
          }
        ]
      }
    }))
    .pipe(gulp.dest('build/js/'));
});

gulp.task('start', function () {
  nodemon({
    script: 'server/server.js',
    ext: 'js jsx html',
    env: { 'NODE_ENV': 'development' },
    
  })
});

gulp.task('default', ['start', 'webpack']);