import config from '../config';

import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

let reload = browserSync.reload;

gulp.task('styles', () => {
  gulp.src(config.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(config.styles.dest))
    .pipe(reload({
      stream: true,
    }));
});
