'use strict';

var gulp	= require('gulp');
var sass	= require('gulp-sass');
var prefix	= require('gulp-autoprefixer');
var sync	= require('browser-sync').create();
var reload	= sync.reloaded;

gulp.task('sass', function() {
	return gulp.src('./assets/sass/main.scss')

		.pipe(sass.sync({
			outputStyle: 'compressed',
			sourceMap: true
		}).on('error', sass.logError))

		.pipe(prefix({
			browsers: ['last 2 versions', 'android 4', 'opera 12']
		}))

		.pipe(gulp.dest('./assets/css'))

		.pipe(sync.stream());
});

gulp.task('watch', function(){

	sync.init({
		proxy : 'http://localhost:2368/'
	});

	gulp.watch('./assets/sass/**/*', ['sass']);
});

gulp.task('default', ['watch']);