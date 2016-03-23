import paths from '../paths';

export default {
  dest: paths.dest + paths.styles,
  src: paths.src + paths.styles + '/*.scss',
  watch: [paths.src + paths.styles + '/*.scss'],
};
