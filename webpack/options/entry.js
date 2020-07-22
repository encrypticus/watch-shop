// Объект настроек по умолчанию
const defaultOptions = {
  index: './src/index.js'
};

/**
 * @description entry это свойство объекта конфига сборщика, указывающее сборщику, откуда брать модули для сборки.
 * Это точка входа для сборщика.
 * @param {object} объект настроек
 * @returns {{index: string}} entry свойство entry объекта конфига сборщика
 * @see https://webpack.js.org/concepts/entry-points/
 * @example
 * const setEntry = require('entry');
 * // Вернет { index: './src' } - объект по умолчанию. Установит единую точку входа по пути ./src/index.js
 * entry: setEntry()
 *
 * // Вернет { main: './js/main' }. Установит единую точку входа по пути ./js/index.js
 * entry: setEntry({ main: './js/index.js' })
 * // Установит несколько точек входа по указанным путям
   entry: setEntry({
      pageOne: './src/pageOne/index.js',
      pageTwo: './src/pageTwo/index.js',
      pageThree: './src/pageThree/index.js'
   })
 */

module.exports = (options = defaultOptions) => {
  return {
    entry: options
  }
};