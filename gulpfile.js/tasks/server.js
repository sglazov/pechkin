const gulp        = require('gulp');
const portfinder  = require('portfinder');
const browserSync = require("browser-sync");


// Запуск локального сервера
gulp.task('server', function() {
  portfinder.getPort(function(err, port) {
    browserSync({
      server: {
        baseDir: "./dist"
      },
      host: 'localhost',
      notify: false,
      port: 8000
    });
  });
});
