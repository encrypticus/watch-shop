// Объект настроек по умолчанию
const defaultOptions = {
  config: {
    path: require('path').resolve('./webpack/configs/')
  }
};

/**
 * @description этот лоадер добавляет postcss, обрабатывающий css-файлы;
 * важно: лоадер должен быть добавлен перед любым из лоадеров, обрабатывающих css-файлы,
 * такими как css-loader и style-loader, но после любого из лоадеров, обрабатывющих
 * препроцессорные файлы, таких как sass-loader, less-loader и т.д.
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/postcss/postcss-loader
 * @example
 * const postcssLoader = require('./webpack/loaders/postcss-loader');
 * // вызов с настройками по умолчанию
 * postcssLoader()
 * // вызов со своими настройками
 * postcssLoader({
 *  plugins: [require('cssnano')(), require('postcss-import')()]
 * })
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'postcss-loader',
    options
  }
};
