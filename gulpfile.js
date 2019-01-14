const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

const DIR = {
  SRC: 'src',
  DEST: 'dist'
};

const PATH = {
  SRC: {
    JS: `${DIR.SRC}/**/*.js`
  },
  DEST: {
    JS: `${DIR.DEST}/`
  }
};

gulp.task('default', () => {
  gulp
    .src(PATH.SRC.JS)
    .pipe(eslint())
    .pipe(eslint.format());

  return gulp
    .src(PATH.SRC.JS)
    .pipe(babel())
    .pipe(gulp.dest(PATH.DEST.JS));
});
