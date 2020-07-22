// Объект настроек по умолчанию
const defaultOptions = {
  pretty: process.env.mode === 'development'
};

/**
 * @description этот лоадер обрабатывает pug-файлы. Свойство pretty принимает булево значение
 * и указывает лоадеру, будет ли минифицирован созданный html-файл. Значение зависит от переменной
 * окружения process.env.mode
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/willyelm/pug-html-loader
 * @example
 * const pugHtmlLoader = require('./webpack/loaders/pug-html-loader');
 * // вызов с настройками по умолчанию
 * pugHmlLoader();
 * // вызов со своими настройками
 * pugHtmlLoader({
 *  pretty: true,
 *  data: {
 *   foo: 'bar'
 *  }
 * });
 */
module.exports = (options) => {
  return {
    loader: 'pug-html-loader',
    options
  }
};
