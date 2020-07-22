// Этот плагин оптимизирует js. Подробнее - https://github.com/webpack-contrib/terser-webpack-plugin
const terserWebpackPlugin = require('terser-webpack-plugin');

// Объект настроек по умолчанию
const defaultOptions = {
  sourceMap: true
};

/**
 * @param options объект настроек плагина
 * @returns {Object} plugin экземпляр плагина
 * @example
 * terserWebpackPlugin = require('./webpack/plugins/terser-webpack-plugin');
 * // вызов с настройками по умолчанию
 * terserWebpackPlugin();
 * // вызов со своими настройками
 * terserWebpackPlugin({
 *  cache: true,
 *  parallel: true,
 *  sourceMap: true
 * });
 */
module.exports = (options = defaultOptions) => {
  return new terserWebpackPlugin(options);
};
