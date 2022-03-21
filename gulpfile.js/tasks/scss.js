/**
 * Сборка SCSS
 */

const { src, dest } = require('gulp');
const _if = require('gulp-if');
const sass = require('gulp-sass');
const sass_importer = require('node-sass-glob-importer');

const config = require('../config.js');


const sass_options = {
  includePaths: ['node_modules'],
  importer: sass_importer(),
  outputStyle: config.env.production ? 'compressed' : 'expanded',
  errLogToConsole: false,
  precision: 4
};


function scss() {
  return src(config.source.styles + 'default.scss')
    .pipe(sass(sass_options)
      .on('error', config.error_handler))
    .pipe(dest(config.build.styles))
}

module.exports = scss;
