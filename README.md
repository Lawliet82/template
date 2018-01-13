# Базовый шаблон для вёрстки страниц   
### Используемые инструменты:  
[gulp](https://www.npmjs.com/package/gulp)  
[gulp-load-plugins](https://www.npmjs.com/package/gulp-load-plugins) — плагин позволяющий подключать плагины без var  
[gulp-pug](https://www.npmjs.com/package/gulp-pug) — шаблонизатор html  
[gulp-sass](https://www.npmjs.com/package/gulp-sass) — компилятор sass  
[gulp-csso](https://www.npmjs.com/package/gulp-csso) — минифицирует и удаляет повторяющийся код  
[gulp-sourcemap](https://www.npmjs.com/package/gulp-sourcemap) — создает sourcemap файла (используется для js и css)  
[gulp-rename](https://www.npmjs.com/package/gulp-rename) — изменяет название файлов  
[browser-sync](https://www.npmjs.com/package/browser-sync) — livereload, синхронизация экранов и ещё много всяких плюшек :)  
[gulp-uglify](https://www.npmjs.com/package/gulp-uglify) — минимизация js  
[del](https://www.npmjs.com/package/del) — удаляет файлы (в нашем случае каталог dist)  
[gulp-zip](https://www.npmjs.com/package/gulp-zip) — архивация папки dist. Чтобы запаковать папку, сначала необходимо выполнить **gulp-build**  
[gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — добавляет css префиксы для поддержки браузеров  
[gulp-babel](https://www.npmjs.com/package/gulp-babel) — перевод javascript из *ES6* в *ES2015*  
[gulp-jshint](https://www.npmjs.com/package/gulp-jshint) — вывод ошибок javascript в консоли gulp  
[gulp-notify](https://www.npmjs.com/package/gulp-notify) — вывод ошибок sass, pug, etc.  
[smart-grid](https://www.npmjs.com/package/smart-grid) — сетка smart-grid  
[normalize.css](https://www.npmjs.com/package/normalize.css) — всегда свежая версия normalize.css в проекте  

### Запуск проекта:  

1. Скачайте архив шаблона  
2. В командной строке выполните **npm install**  
3. Запустите gulp командой **gulp**  
4. Готово, вы восхитительны. Приятной работы
