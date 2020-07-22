// Объект настроек по умолчанию
const defaultOptions = {
  sourceMap: true
};

/**
 * @description этот лоадер обрабатывает css-модули (css-файлы)
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/webpack-contrib/css-loader
 * @example
 * const cssLoader = require('./webpack/loaders/css-loader);
 * // вызов с настройками по умолчанию
 * cssLoader();
 * // вызов со своими настройками
 * cssLoader({
 *  sourceMap: true,
 *  modules: true,
 *  onlyLocals: true
 * })
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'css-loader',
    options
  }
};
