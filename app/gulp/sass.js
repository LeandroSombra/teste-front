var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass', ['fonts'], function(){
	gulp.src('./src/assets/sass/**/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('../dist/assets/css/'));
});