"use strict";


global.$ = {
	path: {
		task: require('./gulp/paths/tasks.js')
  },
	gulp: require('gulp'),
	del: require('del'),
	smartgrid: require('smart-grid'),
	browserSync: require('browser-sync').create(),
	gp: require('gulp-load-plugins')()
};


//$.path.task.forEach(function(taskPath) {
//  require(taskPath)();
//});


require('./gulp/tasks/pug.js')();
require('./gulp/tasks/sass.js')();
require('./gulp/tasks/clean.js')();
require('./gulp/tasks/watch.js')();
require('./gulp/tasks/serve.js')();
require('./gulp/tasks/minjs.js')();
require('./gulp/tasks/imagemin.js')();
require('./gulp/tasks/smartgrid.js')();
require('./gulp/tasks/makejs.js')();
require('./gulp/tasks/babel.js')();
require('./gulp/tasks/move.js')();
require('./gulp/tasks/move.js')();
require('./gulp/tasks/zip.js')();

$.gulp.task('pug');
$.gulp.task('sass');
$.gulp.task('clean');
$.gulp.task('watch');
$.gulp.task('serve');
$.gulp.task('minjs');
$.gulp.task('imagemin');
$.gulp.task('smartgrid');
$.gulp.task('makejs');
$.gulp.task('babel');
$.gulp.task('move');
$.gulp.task('zip');



$.gulp.task('default', $.gulp.series(
	$.gulp.parallel(
		'sass',
		'pug',
		'makejs'
	),
	$.gulp.parallel(
		'watch',
		'serve',
		'smartgrid'
	)
));

// собираем проект
$.gulp.task('build', $.gulp.series(
		'clean',
	$.gulp.parallel(
		'sass',
		'pug',
		'babel',
		//'imagemin'
		'move'
	)
));

// архивация проекта
// ПЕРЕД архивацией проект НЕОБХОДИМО СОБРАТЬ
$.gulp.task('zip', $.gulp.series(
	'zip'
));















//console.log($.gp);




//require('./gulp/tasks/sass.js');
//$.gulp.task('sass');
//
//$.gulp.task('default', function(){
//	return $.gulp.src('./app/css/**/*.css')
//	.pipe(csso())
//	.pipe($.gulp.dest('./dist/css'));	
//});