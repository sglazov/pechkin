const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const plumber  = require('gulp-plumber');
const changed  = require('gulp-changed');

const config   = require('../config');


// Копируем и оптимизируем общие изображения
gulp.task('images', function() {
  return gulp.src(config.source.images)
    .pipe(plumber({ errorHandler: config.errorHandler }))
    .pipe(changed(config.build.images))
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.build.images));
});
