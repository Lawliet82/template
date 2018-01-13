'use strict';

module.exports = function(){
	$.gulp.task('zip', function() {
		return $.gulp.src('dist/**/*.*')
		.on('error', $.gp.notify.onError(function
			(error){
				return {
					title: 'ZIP',
					message: error.message
				}
			}))
		.pipe($.gp.zip('upload.zip'))
		.pipe($.gulp.dest('./'));
	});
};