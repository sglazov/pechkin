/*
   Пути к файлам, с котороыми работаем:
   сборка, исходники и файлы для watch
*/

const src  = 'src/';
const dist = 'dist/';

const config = {
  // Пути к исходникам проекта
  source: {
    templates: [src + 'templates/pages/*.html'],
    styles:    [src + 'styles/'],
    images:    [src + 'images/**/*.+(jpg|jpeg|png|svg|gif|ico)', src + 'templates/**/*.+(jpg|jpeg|png|svg|gif|ico)']
  },

  // Пути к исходникам проекта для бдительных вотчеров
  watch: {
    templates: [src + 'templates/**/*.html'],
    styles:    [src + 'styles/**/*.scss', src + 'templates/**/*.scss'],
    images:    [src + 'images/**/*.+(jpg|jpeg|png|svg|gif|ico)', src + 'templates/**/*.+(jpg|jpeg|png|svg|gif|ico)']
  },

  // Куда всё собирать-то?
  build: {
    html:      dist,
    styles:    src + 'templates/pages',
    images:    dist + 'assets/images',
  },

  errorHandler: require('./utils/errors'),
};

module.exports = config;
