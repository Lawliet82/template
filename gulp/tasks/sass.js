'use strict';
/*
Сначала запускаем инициализацию sourcemap
потом запускаем обработку sass
далее автопрефиксер
следующим csso - сжатие и удаление дублированного кода
и после записываем sourcemap
*/


module.exports = function(){

	$.gulp.task('sass', function () {
		// импорт normalize в app/sass
		var normalize = $.gulp.src(
			'node_modules/normalize.css/normalize.css'
		)
		.pipe($.gulp.dest('app/sass'));
		
	  return normalize, $.gulp.src('app/sass/**/*.sass')
		.pipe($.gp.sourcemaps.init())
		.pipe($.gp.sass())
		.on('error', $.gp.notify.onError(function
			(error){
				return {
					title: 'Sass',
					message: error.message
				}
			}))
		.pipe($.gp.autoprefixer({
			browsers: [
				'last 3 versions',
				'> 1%',
				'ie 8',
				'ie 9',
				'Opera 12.1'			
			],
			cascade: false
		}))
		.pipe($.gp.csso())
		.pipe($.gp.rename({
			suffix: '.min'
	  	}))
		.pipe($.gp.sourcemaps.write())
		.pipe($.gulp.dest('app/css/'));
	});
}