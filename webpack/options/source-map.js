/**
 * @description devtool - это свойство, отвечающее за генерацию карты кода (sourcemap).
 * Чтобы для css и js-файлов была сгенерирована карта кода, нужно обязательно добавить это свойство
 * По умолчанию карты кода будут генерироваться в отдельных файлах, за это отвечает свойство mapType.
 *
 * @param {string} mapType тип карты кода. Возможные значения - https://webpack.js.org/configuration/devtool/
 * @returns {{devtool: string}} значение для свойства devtool объекта конфига сборщика
 * @see https://webpack.js.org/configuration/devtool/
 * @example
 * const generateMap = require('./webpack/options/source-map');
 * // вызов с настройками по умолчанию
 * generateMap();
 * // вызов со своими настройками
 * generateMap('cheap-module-eval-source-map')
 */
module.exports = (mapType = 'source-map') => {
  return {
    devtool: mapType
  }
};
