'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('watch', ['sass', 'minify-css', 'scripts', 'images', 'html', 'jsons'], function(){

	browserSync.init({
		port: 8080,
        server: {
        	baseDir: '../dist',
		    index: 'index.html'
        },
        browser: 'chrome',
        notify: true,
        reloadDelay: 1000
    });

	gulp.watch("./src/assets/sass/**/*.scss", ['sass']);
    gulp.watch("../dist/assets/css/main.css", ['minify-css']);
	gulp.watch("./src/assets/js/**/*.js", ['scripts']);
	gulp.watch("./src/**/*.html", ['html']);
	gulp.watch("./src/assets/images/**/*", ['images']);


    gulp.watch("./src/**/*.*").on('change', browserSync.reload);

});