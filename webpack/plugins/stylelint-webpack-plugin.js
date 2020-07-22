// Этот плагин подключает stylelint
const styleLintWebpackPlugin = require('stylelint-webpack-plugin');

/**
 * Объект настроек по умолчанию
 * Описание всех настроек stylelint - https://stylelint.io/user-guide/node-api#options
 */
const defaultOptions = {
  configFile: 'webpack/configs/stylelint.config.js',
  files: 'src/**/*.(css|scss|sass)',
  fix: true
};

/**
 * @description плагин подключает к проекту линтер css/sass/scss-кода stylelint
 * @param {Object} options объект настроек плагина
 * @returns {Object} plugin экземпляр плагина
 * @example
 * const enableStylelint = require('./webpack/plugins/stylelint-webpack-plugin');
 * // вызов с настройками по умолчанию
 * enableStylelint();
 * // вызов со своими настройками
 * enableStylelint({
 *  configFile: 'webpack/configs/stylelint.config.js',
 *  files: 'src/.css'
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    plugins: [
      new styleLintWebpackPlugin(options)
    ]
  }
};
