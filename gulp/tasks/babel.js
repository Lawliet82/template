'use strict';

module.exports = function(){
	$.gulp.task('babel', function() {
		return $.gulp.src('app/js/**/*.js')
		.on('error', $.gp.notify.onError(function
			(error){
				return {
					title: 'Babel',
					message: error.message
				}
			}))
		.pipe($.gp.babel({
			presets: 'env'
		}))
		.pipe($.gp.uglify())
		.pipe($.gulp.dest('dist/js'));
	});
};