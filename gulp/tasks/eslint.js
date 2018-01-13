'use strict';

module.exports = function(){
	$.gulp.task('eslint', () => {
		return gulp.src(['.app/js/**/*.js','!node_modules/**'])
			.pipe(eslint())
			.pipe(eslint.format())
			.pipe(eslint.failAfterError());
	});
}