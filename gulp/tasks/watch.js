'use strict';

module.exports = function(){
	$.gulp.task('watch', function() {
		$.gulp.watch('app/**/*.sass', $.gulp.series('sass'));
		
		$.gulp.watch('app/*.pug',
		$.gulp.series('pug'));
		
		$.gulp.watch('app/js/**/*.js',
		$.gulp.series('makejs'));
	});
}