/*
  Pechkin — A template for a quick start email development
  Version 0.1.0

  Sergey Glazov
  https://github.com/4enki/pechkin
*/
const gulp        = require('gulp');
const runSequence = require('run-sequence');

const config      = require('./config')

require('require-dir')('./tasks', {recurse: true});


/*---------- Режимы запуска ----------*/

  // Запуск живой сборки
  gulp.task('default', function(cb) {
    return runSequence(
      'images',
      'styles',
      'template',
      'server',
      'watch',
      cb
    );
  });
