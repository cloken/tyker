import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

let reload = browserSync.reload;

gulp.task('styles', () => {
  gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('tmp/styles'))
    .pipe(reload({
      stream: true,
    }));
});
