'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

var paths = {
  js:'app.js'
};


gulp.task('devServer', function() {
 connect.server({
  root: '',
  port: 3000,
  livereload: true
  });
});

gulp.task('watch', function() {
    watch(paths.js).pipe(connect.reload());
    gulp.watch('sass/*.scss', ['sass']);

});

// Precompile Sass
gulp.task('sass', function() {
  gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});


gulp.task('dev',['sass','devServer','watch']);
