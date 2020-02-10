const gulp           = require('gulp');
const plumber        = require('gulp-plumber');
const nunjucksRender = require('gulp-nunjucks-render');
const frontMatter    = require('gulp-front-matter');
const markdown       = require('nunjucks-markdown');
const marked         = require('marked');
const inlineCss      = require('gulp-inline-css');
const typograf       = require('gulp-typograf');

const config         = require('../config');

const nunjucksMarkdown = function(env) {
  markdown.register(env, marked);
};


// Шаблонизация
gulp.task('template', function() {
  return gulp.src(config.source.templates)
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(frontMatter({ property: 'data' }))
    .pipe(nunjucksRender({
      path:     'src/templates',
      manageEnv: nunjucksMarkdown
    }))
    .pipe(typograf({
      locale: ['ru'],
      htmlEntity: { type: 'name' }
    }))
    .pipe(inlineCss({
      removeStyleTags: false,
      applyStyleTags: false,
      removeLinkTags: true,
      applyLinkTags: true,
      preserveMediaQueries: true
    }))
    .pipe(gulp.dest(config.build.html));
});
