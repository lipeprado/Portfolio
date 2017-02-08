var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    liveServer = require("live-server"),
     cssnano = require('gulp-cssnano');




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
    .pipe(cssnano())
    .pipe(gulp.dest('resources/css/final'));

});

gulp.task('html', function(){

    var params = {
    port: 4040, // Set the server port. Defaults to 8080.
    host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
    root: "", // Set root directory that's being served. Defaults to cwd.
    open: true, // When false, it won't load your browser by default.
    ignore: 'scss,my/templates', // comma-separated string for paths to ignore
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
    middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);

});


//Watch Task
gulp.task('watch', function(){


    gulp.watch('resources/js/*.js', ['scripts']),
    gulp.watch('resources/css/**/*.scss', ['styles']);

});

gulp.task('default', ['scripts', 'styles', 'watch','html']);
