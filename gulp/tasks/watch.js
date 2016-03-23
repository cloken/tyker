import config from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';

let reload = browserSync.reload;

gulp.task('watch', () => {
  gulp.watch(config.scripts.watch).on('change', reload);
  gulp.watch(config.styles.watch, ['styles']);
  gulp.watch(config.dest + '/*.html').on('change', reload);
});
