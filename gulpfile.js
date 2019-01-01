const gulp        = require('gulp');
const sass        = require('gulp-sass');
const del         = require('del');
const nodemon     = require('gulp-nodemon');
const cleanCSS    = require('gulp-clean-css');
const plumber     = require('gulp-plumber');
const babel       = require('gulp-babel');
const uglify      = require('gulp-uglify');
const runsequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const env         = require('./config/env');

gulp.task('clean', () => {
  return del('public');
});

gulp.task('js', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(babel({ presets: ['es2015'] }))
    // .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

gulp.task('vendor-js', () => {
  return gulp.src('node_modules/vue/dist/vue.js')
    .pipe(gulp.dest('public/js'));
});

gulp.task('css', () => {
  return gulp.src('src/css/**/*.css')
    .pipe(gulp.dest('public/styles'))
    .pipe(browserSync.stream());
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*.{png,jpg,jpeg,gif,ico}')
    .pipe(gulp.dest('public/images'))
    .pipe(browserSync.stream());
});

gulp.task('sass', () => {
  return gulp.src('src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('public/styles'));
});

gulp.task('serve', ['sass', 'js'], () => {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: 8000,
    files: ['public/**/*.*'],
    reloadDelay: 500,
    notify: false,
    open: false
  });

  return nodemon({ script: 'index.js'})
  .on('start', () => browserSync.reload());
});

gulp.task('default', ['sass', 'css', 'images', 'vendor-js', 'js', 'serve'], () => {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/images/**/*.{png,jpg,jpeg,gif,ico}', ['images']);
  gulp.watch('views/**/*.ejs', browserSync.reload);
});

gulp.task('build', cb => {
  runsequence('clean', ['css', 'sass', 'js', 'vendor-js', 'images'], cb);
});
