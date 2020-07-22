// Объект настроек по умолчанию
const defaultOptions = {
  attrs: ['img:src', 'video:poster', 'video:src']
};

/**
 * @description этот лоадер обрабатывает html-файлы. Свойство attrs указывает, какая комбинация тега-атрибута
 * должна обрабатываться этим лоадером
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/webpack-contrib/html-loader
 * @example
 * const htmlLoader = require('./webpack/loaders/html-loader');
 * // вызов с настройками по умолчанию
 * htmlLoader();
 * // вызов со своими настройками
 * htmlLoader({
 *  minimaze: true,
 *  removeComments: false,
 *  collapseWhitespace: false
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'html-loader',
    options
  }
};
