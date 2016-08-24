const gulp = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');
const inject = require('gulp-inject');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const processors = [
  autoprefixer({
    browers: ['last 2 versions'],
    cascade: false
  }),
  cssnano()
];

gulp.task('pug', () => {
  return gulp
    .src('./src/view/index.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp
    .src('./src/js/coveo.js')
    .pipe(gulp.dest('./dist/vendor'))
    .pipe(browserSync.stream());
});

gulp.task('sass', () => {
  return gulp
    .src('./src/sass/coveo.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('shepherd-theme-coveo.css'))
    .pipe(postcss(processors))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
});

gulp.task('copy', () => {
  return gulp
    .src([
    'node_modules/jquery/dist/jquery.js',
    'node_modules/underscore/underscore.js',
    'node_modules/coveo-styleguide/dist/css/CoveoStyleGuide.css',
    'node_modules/coveo-styleguide/dist/css/CoveoStyleGuide.css.map',
    'node_modules/coveo-styleguide/dist/js/CoveoStyleGuide.Dependencies.js',
    'node_modules/coveo-styleguide/dist/js/scripts.js',
    'node_modules/tether-shepherd/dist/js/tether.js',
    'node_modules/tether-shepherd/dist/js/shepherd.js',
    'node_modules/prismjs/prism.js',
    'node_modules/prismjs/themes/prism-dark.css'
  ])
    .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('inject', ['pug'], () => {
  const sources = [
    'dist/vendor/jquery.js',
    'dist/vendor/tether.js',
    'dist/vendor/**/*.js',
    'dist/**/*.css*'
  ];
  const target = './dist/index.html';

  return gulp
    .src(target)
    .pipe(inject(gulp.src(sources, { read: false }), {
      relative: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: './dist'
  });

  gulp.watch('./src/view/index.pug', ['inject']).on('change', browserSync.reload);
  gulp.watch('./src/js/coveo.js', ['js']);
  gulp.watch('./src/sass/coveo.scss', ['sass']);
});

gulp.task('default', ['copy', 'inject', 'js', 'serve'])