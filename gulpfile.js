'use strict';

var gulp	= require('gulp');
var sass	= require('gulp-sass');
var maps	= require('gulp-sourcemaps')

gulp.task('sass', function() {
	return gulp.src('./assets/sass/main.scss')

		.pipe(maps.init())

		.pipe(sass.sync({
			outputStyle: 'compressed',
			sourceMap: true
		}).on('error', sass.logError))

		.pipe(maps.write('./'))

		.pipe(gulp.dest('./assets/css'))
})