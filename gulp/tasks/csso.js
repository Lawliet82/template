"use strict";
var csso   = require('gulp-csso');
module.exports = function(){

	$.gulp.task('csso', function(){
		return $.gulp.src('./app/css/*.css')
				.pipe(csso())
				.pipe($.gulp.dest('./dist/css'));
	});
}