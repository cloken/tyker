var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function () {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('tmp/styles'))
    .pipe(reload({
      stream: true,
    }));
});
