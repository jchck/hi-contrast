'use strict';

var gulp	= require('gulp');
var sass	= require('gulp-sass');
var maps	= require('gulp-sourcemaps');
var sync	= require('browser-sync').create();
var reload	= sync.reloaded;

gulp.task('sass', function() {
	return gulp.src('./assets/sass/main.scss')

		.pipe(maps.init())

		.pipe(sass.sync({
			outputStyle: 'compressed',
			sourceMap: true
		}).on('error', sass.logError))

		.pipe(maps.write('./'))

		.pipe(gulp.dest('./assets/css'))

		.pipe(sync.stream())
});

gulp.task('watch', function(){

	sync.init({
		proxy : 'http://localhost:2368/'
	});

	gulp.watch('./assets/sass/**/*', ['sass']);
});

gulp.task('default', ['watch']);