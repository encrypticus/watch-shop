// Этот плагин подключает browser sync к проекту
const browserSync = require('browser-sync-webpack-plugin');

// Объект настроек по умолчанию
const defaultOptions = {
  host: 'localhost',
  port: 3000,
  server: {baseDir: ['dist']}
};

/**
 * @description плагин подключает к проекту browser sync
 * @param options объект настроек плагина
 * host - имя хоста, по которму будет доступна страница
 * port - номер порта, по которому будет доступна страница
 * server.baseDir - директория, из которой плагин считывает файлы для отображения в браузере
 * Список всех настроек: https://www.browsersync.io/docs/options/
 * @returns @returns {Object} plugin экземпляр плагина
 * @see https://github.com/Va1/browser-sync-webpack-plugin
 * @example
 * const browserSync = require('./webpack/plugins/browser-sync-webpack-plugin');
 * // вызов с настройками по умолчанию
 * browserSync();
 * // вызов со своими настройками
 * browserSync({
 *  host: 'my-site',
 *  port: 3300,
 *  server: {
 *    baseDir: 'app',
 *    index: 'app.html'
 *  }
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    plugins: [
      new browserSync(options)
    ]
  }
};
