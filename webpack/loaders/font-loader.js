// Объект настроек по умолчанию
const defaultOptions = {
  name: './fonts/[name].[ext]'
};

/**
 * @description file-loader преобразует import/require для файла в URL-адрес и отправляет файл в выходной каталог
 * @param {Object} options объект настроек для лоадера
 * @returns {Object} loader конфиг лоадера
 * @name {string} name пользовательский шаблон имени файла для целевого файла
 * @example
 * const fontLoader = require('./webpack/loaders/font-loader');
 * // вызов с настройками по умолчанию
 * fontLoader();
 * // вызов со своими настройками
 * fontLoader({
 *  name: 'assets/fonts/[name].[ext],
 *  publicPath: 'assets',
 *  emitFile: false
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'file-loader',
    options
  }
};
