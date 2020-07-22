// Этот плагин извлекает css-файлы в папку назначения
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Объект настроек по умолчанию
const defaultOptions = {
  filename : process.env.mode === 'production' ? '[name].[contenthash:8].css' : '[name].css',
  chunkFilename: process.env.mode === 'production' ? '[name].[contenthash:8].css' : '[name].css'
};

/**
 * @description плагин собирает все импортируемые css-файлы в один или несколько общих файлов и кладет их в папку назначения
 * @param {Object} options объект настроек плагина
 * @returns {Object} plugin экземпляр плагина
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin
 * @example
 * const miniCssExtractPlugin = require('./webpack/plugins/mini-css-extract-plugin');
 * // вызов с настройками по умолчанию
 * miniCssExtractPlugin();
 * // вызов со своими настройками
 * miniCssExtractPlugin({
 *  filename: '[name].css',
 *  chunkFilename: '[id].css',
 *  ignoreOrder: false
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    plugins: [
      new MiniCssExtractPlugin(options)
    ]
  }
};
