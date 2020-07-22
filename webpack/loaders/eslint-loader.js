// Объект настроек по умолчанию
const defaultOptions = {
  emitWarning: true,
  configFile: require('path').resolve(__dirname, '../configs/.eslintrc.js'),
  fix: true
};
/**
 * @description этот лоадер подключает eslint для js. Свойство emitWarning включает отображение предупреждений линтера в консоли.
 * Свойство configFille содержит путь к файлу конфига линтера. Свойство 'fix' указывает линтеру попытаться исправить
 * как можно больше проблем. Исправления вносятся в сами файлы, и выводятся только оставшиеся нефиксированные проблемы.
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/webpack-contrib/eslint-loader
 * @example
 * const eslintLoader = require('./webpack/loaders/eslint-loader');
 * // вызов с настройками по умолчанию
 * eslintLoader();
 * // вызов со своими настройками
 * eslintLoader({
 *  configFile: require('path').resolve(__dirname, '../../.eslintrc.js'),
 *  cache: true,
 *  formatter: require('eslint-friendly-formatter')
 * })
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'eslint-loader',
    options
  }
};
