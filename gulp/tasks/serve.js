'use strict';

module.exports = function() {
	$.gulp.task('serve', function(){		
		$.browserSync.init({
			open: false,
			server: {
				baseDir: './app'
			}
		});
		$.browserSync.watch('app', $.browserSync.reload);
	});
}