/**
 * Pechkin — A template for a quick start email development
 *
 * Sergey Glazov, sglazov@sglazov.ru
 * https://github.com/sglazov/pechkin
 */

const { series, parallel } = require('gulp');

const images = require('./tasks/images');
const scss = require('./tasks/scss');
const template = require('./tasks/template');
const watcher = require('./tasks/watch');
const { serve } = require('./tasks/server');


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
