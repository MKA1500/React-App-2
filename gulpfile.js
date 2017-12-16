'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var SCSS_SRC = './src/Assets/scss**/*.scss';
var DEST = './src/Assets/css';

gulp.task('sass', function () {
    return gulp.src(SCSS_SRC)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(DEST));
});

gulp.task('watch_scss', function () {
    gulp.watch(SCSS_SRC, ['sass']);
});

gulp.task('default', ['watch_scss']);