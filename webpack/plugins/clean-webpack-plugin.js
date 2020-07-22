// Этот плагин очищает папку сборки перед каждой пересборкой
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Объект настроек по умолчанию
const defaultOptions = {
  verbose: true,
  cleanStaleWebpackAssets: false
};

/**
 * @description плагин очищает папку сборки перед каждой пересборкой. Свойство verbose отвечает
 * за вывод лога в консоль
 * @param {Object} options объект настроек плагина
 * @returns {Object} plugin экземпляр плагина
 * @see https://github.com/johnagan/clean-webpack-plugin
 * @example
 * const cleanWebpackPlugin = require('./webpack/plugins/clean-webpack-plugin');
 * // вызов с настройками по умолчанию
 * cleanWebpackPlugin();
 * // вызов со своими настройками
 * cleanWebpackPlugin({
 *  cleanStaleWebpackAssets: false,
 *  cleanOnceBeforeBuildPatterns: []
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    plugins: [
      new CleanWebpackPlugin(options)
    ]
  }
};
