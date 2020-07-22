// Этот плагин копирует отдельные файлы или целые каталоги, которые уже существуют, в каталог сборки.
const copyPlugin = require('copy-webpack-plugin');

/**
 * @description плагин копирует указанные файлы или папки в папку назначения
 * @param {Object} options объект настроек плагина
 * @returns {Object} plugin экземпляр плагина
 * @see https://github.com/webpack-contrib/copy-webpack-plugin
 * @example
 * const copyPlugin = require('copy-webpack-plugin');
 * copyPlugin([
 *  {from: 'src/images', to: 'images'},
 *  {from: 'src/assets/favicons', to: 'favicons'}
 * ]);
 */
module.exports = (options = {}) => {
  return {
    plugins: [
      new copyPlugin(options)
    ]
  }
};
