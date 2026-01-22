'use strict';

var gulp = require('gulp');

gulp.task('css', function () {
    var sass = require('gulp-sass')(require('sass'));
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./asset/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules/susy/sass']
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./asset/css'));
});

gulp.task('vendor:chosen', function () {
    return gulp.src([
        './node_modules/chosen-js/chosen.min.css',
        './node_modules/chosen-js/chosen.jquery.min.js'
    ], { allowEmpty: true })
    .pipe(gulp.dest('./asset/vendor/chosen'));
});

gulp.task('build', gulp.parallel('css', 'vendor:chosen'));

gulp.task('css:watch', function () {
    gulp.watch('./asset/sass/*.scss', gulp.parallel('css'));
});
