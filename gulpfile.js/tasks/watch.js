const gulp        = require('gulp');
const watch       = require('gulp-watch');
const runSequence = require('run-sequence');
const browserSync = require("browser-sync");
const reload      = browserSync.reload;

const config      = require('../config');


/*---------- Бдительные вотчеры ----------*/

// Федеральная служба по контролю за оборотом файлов
gulp.task('watch', function() {
  watch(config.watch.templates, function() {
    return runSequence('template', reload);
  });
  watch(config.watch.styles, function() {
    return runSequence('styles', 'template', reload);
  });
});
