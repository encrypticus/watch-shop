// Объект настроек по умолчанию
defaultOptions = {
  configFile: require('path').resolve(__dirname, '../configs/babel.config.js')
};

/**
 * @description этот лоадер обрабатывает js-файлы. Свойство configFile - это путь к файлу конфига
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/babel/babel-loader
 * @example
 * const babelLoader = require('./webpack/loaders/babel-loader');
 * // вызов с настройками по умолчанию
 * babelLoader();
 * // вызов со своими настройками
 * babelLoader({
 * configFile: require('path').resolve(__dirname, '../../.babelrc'),
 *  plugins: ['@babel/plugin-transform-runtime']
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'babel-loader',
    options
  }
};
