var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('scripts', ['jsons'], function() {
  return browserify('./src/assets/js/main.js')
    .bundle()
    .on('error', function(err){
    	console.log(err.toString());
        this.emit("end");
    })
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('../dist/assets/js'))
});