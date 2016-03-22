var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: {
      baseDir: ['./docs', './src', './tmp'],
      routes: {
        '/node_modules': 'node_modules',
      },
    },
  });

  gulp.watch('src/scripts/*.js').on('change', browserSync.reload);
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('docs/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('tmp/styles'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
