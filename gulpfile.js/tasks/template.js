/**
 * Работа с шаблонами писем
 */

const {src, dest} = require('gulp');
const plumber = require('gulp-plumber');
const _if = require('gulp-if');
const front_matter = require('gulp-front-matter');
const nunjucks_render = require('gulp-nunjucks-render');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
const typograf = require('gulp-typograf');
const htmlmin = require('gulp-htmlmin');
const inline_css = require('gulp-inline-css');
const replace = require('gulp-replace');

const config = require('../config.js');


marked.setOptions({
  headerIds: false
});
const nunjucksMarkdown = function (env) {
  markdown.register(env, marked);
};

const typograf_options = {
  locale: ['ru', 'en-US'],
  htmlEntity: {type: 'name'},
  safeTags: [
    ['<\\?php', '\\?>'],
    ['<no-typography>', '</no-typography>'],
    ['<head>', '</head>'],
    ['<style>', '</style>']
  ]
};

const inlinecss_options = {
  removeStyleTags: false,
  applyStyleTags: true,
  removeLinkTags: true,
  applyLinkTags: true,
  preserveMediaQueries: true
};

const htmlmin_options = {
  minifyCSS: true,
  collapseWhitespace: true,
  minifyJS: true,
  removeComments: true,
  ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[=|php]?[\s\S]*?\?>/]
};


function template() {
  return src(config.source.mails + '**/*.html')
    .pipe(plumber({errorHandler: config.error_handler}))
    .pipe(front_matter({
      property: 'data',
      remove: true
    }))
    .pipe(nunjucks_render({
      path: config.source.templates,
      manageEnv: nunjucksMarkdown
    }))
    .pipe(typograf(typograf_options))
    .pipe(_if(
      config.env.production,
      inline_css(inlinecss_options)
    ))
    // .pipe(_if(
    //   config.env.production,
    //   htmlmin(htmlmin_options)
    // ))
    .pipe(replace('<no-typography>', ''))
    .pipe(replace('</no-typography>', ''))
    .pipe(dest(config.build.mails))
}

module.exports = template;
