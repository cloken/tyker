import paths from './paths';

import server from './config/server';
import scripts from './config/scripts';
import styles from './config/styles';

export default {
  dest:    paths.dest,
  src:     paths.src,

  server:  server,
  scripts: scripts,
  styles:  styles,
};
