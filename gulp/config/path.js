import { basename, resolve } from 'path';
const rootFolder = basename(resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    files: `${buildFolder}/files/`
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    files: `${srcFolder}/files/**/*.*`
  },
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/**/*.html`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    files: `${srcFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: '',
};
