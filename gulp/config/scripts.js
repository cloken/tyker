import paths from '../paths';

export default {
  dest: paths.dest + paths.scripts,
  src: paths.src + paths.scripts + '/*.js',
  watch: [paths.src + paths.scripts + '/*.js'],
};
