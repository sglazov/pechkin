/**
 * Pechkin — A template for a quick start email development
 *
 * Sergey Glazov, sglazov@sglazov.ru
 * https://github.com/sglazov/pechkin
 */

const { series, parallel } = require('gulp');

const images = require('./tasks/images.js');
const scss = require('./tasks/scss.js');
const template = require('./tasks/template.js');
const watcher = require('./tasks/watch.js');
const { serve } = require('./tasks/server.js');


/**
 * Базовый gulp-таск
 *
 * Собирает шаблоны и откроет в браузере превью собранной папки,
 * запустит вотчеры на файлы стилей и шаблонов
 */
exports.default = series(
  parallel(
    scss,
    template
  ),
  images,
  parallel(
    serve,
    watcher
  )
);

/**
 * Одноразово соберёт в итоговую папку минифицированные шаблоны писем
 */
exports.build = series(
  scss,
  template,
  images
);
