const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const runSequence  = require('run-sequence');

const config       = require('../config');

// Компиляция стилей
gulp.task('styles', function() {
  return gulp.src(config.source.styles + 'style.scss')
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'expanded',
      errLogToConsole: true,
      precision: 8
    }).on('error', config.errorHandler))
    .pipe(gulp.dest(config.build.styles))
});
