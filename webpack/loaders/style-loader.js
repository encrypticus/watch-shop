/**
 * @description этот лоадер вставляет css на страницу через теги style. Используется в development режиме сборщика
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/webpack-contrib/style-loader
 * @example
 * const styleLoader = require('./webpack/loaders/style-loader');
 * // вызов с настройками по умолчанию
 * styleLoader()
 * // вызов со своими настройками
 * styleLoader({
 *  injectType: 'singletonStyleTag'
 * })
 */
module.exports = (options = {}) => {
  return {
    loader: 'style-loader',
    options
  }
};
