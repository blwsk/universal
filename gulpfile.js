'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const webpack = require('webpack-stream');

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
    script: 'app.js',
    ext: 'js jsx html',
    env: { 'NODE_ENV': 'development' },
    
  })
});

gulp.task('default', ['start', 'webpack']);