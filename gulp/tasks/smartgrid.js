'use strict';

module.exports = function(){
	$.gulp.task('smartgrid', function(){
		var settings = {
			outputStyle: 'sass',
			columns: 12, /* number of grid columns */
			offset: '22px', /* gutter width px || % */
			defaultMediaDevice: 'all',
			mobileFirst: false,
			container: {
				maxWidth: '1200px',
				fields: '15px'
			},
			breakPoints: {
				xl: {
					width: '1200px'
				},
				lg: {
					width: '1100px'
				},
				md: {
					width: '960px'
				},
				sm: {
					width: '780px'
				},
				xs: {
					width: '560px'
				},
				xxs: {
					width: '320px'
				}
			}
		};
		return $.smartgrid('app/sass', settings);
	});
}