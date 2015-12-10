'use strict';

var gulp = require('gulp');

gulp.task('jsons', function(){
	gulp.src('./src/js/json/*.json', { base: './src/js/json' })
		.pipe(gulp.dest('../dist/js/json'))
});