var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', ['styles'], function () {
  browserSync({
    server: {
      baseDir: ['./docs', './src', './tmp'],
      routes: {
        '/node_modules': 'node_modules',
      },
    },
  });

  gulp.watch('src/scripts/*.js').on('change', browserSync.reload);
  gulp.watch('src/styles/*.scss', ['styles']);
  gulp.watch('docs/*.html').on('change', browserSync.reload);
});
