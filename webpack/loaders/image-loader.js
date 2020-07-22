// Объект настроек по умолчанию
const defaultOptions = {
  name: process.env.mode === 'development' ? './img/[name].[ext]' : './img/[name].[contenthash:8].[ext]'
};

/**
 * @description file-loader преобразует import/require для файла в URL-адрес и отправляет файл в выходной каталог
 * @param {Object} options объект настроек для лоадера
 * @returns {Object} loader конфиг лоадера
 * @name {string} name пользовательский шаблон имени файла для целевого файла. Имя шаблона зависит от переменной
 * окружения 'process.env.mode', которая устанавливается скриптом в свойтсве 'scripts' в файле package.json.
 * Если значение переменной равно 'production', то имя будет складываться из имени файла и восьми символов хэша от его
 * содержимого. Если же значение переменной равно 'development', то имя будет складываться из имени файла.
 * @see https://github.com/webpack-contrib/file-loader
 * @example
 * const imageLoader = require('./webpack/loaders/image-loader');
 * // вызов с настройкам по умолчанию
 * imageLoader();
 * // вызов со всоими настройками
 * imageLoader({
 *  name: 'assets/images/[name].[ext],
 *  publicPath: 'assets',
 *  emitFile: false
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'file-loader',
    options
  }
} ;
