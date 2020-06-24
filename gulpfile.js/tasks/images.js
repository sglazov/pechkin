/**
 * Минифицируем графику
 */
const { src, dest, lastRun } = require('gulp');
const _if = require('gulp-if');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const imagemin = require('gulp-imagemin');

const config = require('../config');


function images() {
  return src(config.source.images, { since: lastRun(images) })
    .pipe(plumber({ errorHandler: config.error_handler }))
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      use: [pngquant()]
    }))
    .pipe(dest(config.build.images))
}

module.exports = images;
