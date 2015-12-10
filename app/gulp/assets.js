'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');


var files = [
	'./bower_components/angular/angular.min.js',
	'./bower_components/jquery/dist/jquery.min.js',

];

var fixFiles = [
	'./asset_fix/angular-route.js'
];


gulp.task('assets', ['assets-fix'], function(){
	gulp.src(files)
	    .pipe(uglify('assets.min.js', {
	      outSourceMap: true
	    }))
	    .pipe(gulp.dest('../dist/assets/js/vendor'))
});


gulp.task('assets-fix', function(){
	gulp.src(fixFiles)
	    .pipe(gulp.dest('../dist/assets/js'))
});