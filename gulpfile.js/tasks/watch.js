/**
 * Федеральная служба по контролю за оборотом файлов
 */

const { watch, series } = require('gulp');
const { reload } = require('./server');

const images = require('./images.js');
const scss = require('./scss.js');
const template = require('./template.js');

const config = require('../config.js');


function watcher() {
  watch(config.watch.templates, series(template, reload));
  watch(config.watch.styles,    series(scss, template, reload));
  watch(config.watch.images,    series(images, reload));
}

module.exports = watcher;
