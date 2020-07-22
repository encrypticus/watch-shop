// Этот плагин генерирует html-файл в папке назначения
const htmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @description Плагин генерирует html-файлы в папке назначения
 * @param {Object} options объект настроек плагина.
 * Список всех настроек: https://github.com/jantimon/html-webpack-plugin#options
 * @returns {Object} plugin экземпляр плагина
 * @see https://github.com/jantimon/html-webpack-plugin
 * @example
 * const emmitHtml = require('./webpack/plugins/htmlWebpackPlugin');
 *
 * filename - это имя файла, который будет создан в результате сборки;
 * template - это путь к пользовательскому шаблону, на основе которого плагин создаст html-файл;
 * Шаблон может быть написан как на чистом html, так на одном из препроцессоров, таких как pug, handlebars и др.
 * Список поддерживаемых препроцессоров - https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md
 * chunks - это список чанков, ссылки на которые будут вставлены в сгенерированном html-файле;
 * excludeChunks - это список чанков, ссылки на которые будут исключены из конечного шаблона
 * emmitHtml({
      filename: 'index.html',
      template: 'src/pages/index.pug',
      chunks: ['index', 'npm.bootstrap', 'npm.jquery']
    })
 * emmitHtml({
      filename: 'blog.html',
      template: 'src/pages/blog.html',
      chunks: ['blog', 'npm.hammer']
    })
 * emmitHtml({
      filename: 'chat.html',
      template: 'src/pages/chat.html',
      excludeChunks: ['index', 'blog', 'npm.bootstrap']
    })
 */
module.exports = (options = '') => {
  return {
    plugins: [
      new htmlWebpackPlugin(options)
    ]
  }
};
