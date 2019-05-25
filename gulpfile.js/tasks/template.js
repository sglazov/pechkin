const gulp           = require('gulp');
const plumber        = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const markdown       = require('nunjucks-markdown');
const marked         = require('marked');
const inlineCss      = require('gulp-inline-css');
const notify         = require("gulp-notify");

const config         = require('../config');

let nunjucksMarkdown = function(env) {
  markdown.register(env, marked);
};


// Шаблонизация
gulp.task('template', function() {

  return gulp.src(config.source.templates)
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(nunjucksRender({
      path: 'src/templates',
      manageEnv: nunjucksMarkdown
    }))
    .pipe(inlineCss({
      removeStyleTags: false,
      applyStyleTags: false,
      removeLinkTags: true,
      applyLinkTags: true,
      preserveMediaQueries: true
    }))
    .pipe(notify({
      message: 'Pechkin: template task'
    }))
    .pipe(gulp.dest(config.build.html));
});
