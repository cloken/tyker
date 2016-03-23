import config from '../config';

import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('server', ['styles', 'watch'], () =>
  browserSync(config.server)
);
