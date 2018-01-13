'use strict';

module.exports = function(){
	$.gulp.task('move', function() {
		var html = $.gulp.src('app/*.html')
		.pipe($.gulp.dest('dist'));
		
		var css = $.gulp.src('app/css/**/*.css')
		.pipe($.gulp.dest('dist/css'));
		// ****************************
		// JavaScript и картинки испортируются автоматом
		//после завершения тасков babel и imagemin
		// ****************************		
		return html, css;
	});
}