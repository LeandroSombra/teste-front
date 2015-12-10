var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
 
gulp.task('minify-css', function() {
  return gulp.src('../dist/assets/css/main.css')
    .pipe(minifyCss({compatibility: 'ie7'}))
    .pipe(gulp.dest('../dist/assets/css/minify/'));
});