'use strict';

var gulp = require('gulp');

gulp.task('fonts', function(){
	gulp.src('./src/assets/sass/fonts/*.*', { base: './src/assets/sass/fonts' })
		.pipe(gulp.dest('../dist/assets/css/fonts'))
});