'use strict';

module.exports = function(){
	$.gulp.task('makejs', function() {
		return $.gulp.src('app/js/**/*.js')
		.pipe($.gp.sourcemaps.init())
		.on('error', $.gp.notify.onError(function
			(error){
				return {
					title: 'JavaScript',
					message: error.message
				}
			}))
		.pipe($.gp.jshint())
	  	.pipe($.gp.jshint.reporter('default'))
		.pipe($.gp.babel({
			presets: 'env'
		}))
		.pipe($.gp.sourcemaps.write('.'))
		.pipe($.gulp.dest('app/js'));
	});
};