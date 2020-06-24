/**
 * Пути к файлам, с которыми работаем:
 */

const env = require('minimist')(process.argv.slice(2));

const mails  = './mails/';
const src    = './app/src/';
const dist   = './public_html/';

const images = '*.+(jpg|jpeg|png|gif|ico|webp|svg)';

const config = {
  // Пути к исходникам проекта
  source: {
    mails      : mails,
    templates  : src,
    components : src + 'components/',
    layouts    : src + 'layouts/',
    styles     : src + 'styles/',
    images     : src + 'images/**/' + images
  },

  // Пути к исходникам проекта для бдительных вотчеров
  watch: {
    templates : [mails + '**/*.html', src + 'components/**/*.html', src + 'layouts/**/*.html'],
    styles    : src + 'styles/**/*.scss',
    images    : src + 'images/**/' + images
  },

  // Куда всё собирать-то?
  build: {
    mails  : dist,
    styles : src  + 'layouts/styles',
    images : dist + 'images',
  },

  // Окружения
  env: {
    development : !!env.development,
    production  : !!env.production
  },

  error_handler: require('./utils/error'),
};

module.exports = config;
