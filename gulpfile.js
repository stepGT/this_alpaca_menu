import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('---build'),
  isDev: !process.argv.includes('---build'),
  path: path,
  gulp: gulp,
  plugins
};

// Tasks
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { scss } from './gulp/tasks/scss.js';

// Watcher change files and html
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.scss, scss);
};

const mainTasks = gulp.parallel(copy, html, images, scss);

export const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
export const build = gulp.series(reset, mainTasks);

// Default task
gulp.task('default', dev);
