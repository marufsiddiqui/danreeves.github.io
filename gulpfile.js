var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


gulp.task('css', function () {
    gulp.src('./_includes/css/*.scss')
        .pipe(sass({includePaths: ['_includes/css']}))
        .pipe(csso())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('js', function () {
    gulp.src('./_includes/js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./assets/js'));
});


gulp.task('default', function () {
    gulp.run('css', 'js');
    gulp.watch('./_includes/css/*', function () {
        gulp.run('css');
    });

    gulp.watch('./_includes/js/*', function () {
        gulp.run('js');
    });
});
