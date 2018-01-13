'use strict';

module.exports = function(){
	$.gulp.task('imagemin', function(){
		return $.gulp.src('app/img/**/*')
		.pipe($.gp.imagemin([
			$.gp.imagemin.gifsicle({interlaced: true}),
			$.gp.imagemin.jpegtran({progressive: true}),
			$.gp.imagemin.optipng({optimizationLevel: 10}),
			$.gp.imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe($.gulp.dest('dist/img'))
	});
}