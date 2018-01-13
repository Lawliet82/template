'use strict';

module.exports = function(){
	$.gulp.task('minjs', function() {
		return $.gulp.src([
			'./app/js/main.js',
			])
		.pipe($.gp.uglify())
		.pipe($.gulp.dest('dist/js'));
	});
};