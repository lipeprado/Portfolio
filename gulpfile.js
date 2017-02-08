var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');




// Scripts
gulp.task('scripts', function(){
    gulp.src('resources/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('resources/js/final'));
});

//styles
gulp.task('styles', function(){
    gulp.src('resources/css/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('resources/css/final'))
    .pipe(livereload());

});



//Watch Task
gulp.task('watch', function(){


    gulp.watch('resources/js/*.js', ['scripts']),
    gulp.watch('resources/css/**/*.scss', ['styles']);

});

gulp.task('default', ['scripts', 'styles', 'watch']);
