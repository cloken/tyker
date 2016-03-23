import config from '../config';

import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task('scripts', () => {
  gulp.src(config.scripts.src)
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(gulp.dest(config.scripts.dest));
});
