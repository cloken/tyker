import paths from '../paths';

export default {
  server: {
    baseDir: paths.dest,
    routes: {
      '/node_modules': './node_modules',
    },
  },
};
