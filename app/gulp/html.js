'use strict';

var gulp = require('gulp');

gulp.task('html', function(){
	gulp.src('./src/**/*.html', { base: './src/' })
		.pipe(gulp.dest('../dist'))
});