const nodePath = require('path'); // модуль платформы node.js; предоставляет утилиты для работы с путями файлов и каталогов

/**
 * @description Объект настроек по умолчанию
 * @type {{filename: string, path: string}}
 */
const defaultOptions = {
  filename: process.env.mode === 'production' ? '[name].[contenthash:8].js' : '[name].js',
  path: nodePath.resolve(__dirname, '../../dist')
};

/**
 * @description Свойство output определяет имя конечного бандла. Файл бандла записывается в каталог,
 * указанный параметром path.
 * @param filename имя собранного файла (бандла). Имя зависит от переменной окружения 'process.env.mode',
 * которая устанавливается скриптом в свойтсве 'scripts' в файле package.json. Если значение переменной равно 'production',
 * то имя будет складываться из имени файла и восьми символов хэша от его содержимого. Если же значение переменной равно
 * 'development', то имя будет складываться из имени файла.
 * @param path каталог, в который будет записан файл бандла
 * @returns {{filename: string, path: string}} output свойство output объекта конфига сборщика
 * @see https://webpack.js.org/configuration/output/
 * @example
 * const setOutput = require('output');
 *
 * // Вернет { filename: '[name].js', path: nodePath.resolve(__dirname, 'dist') } - объект по умолчанию.
 * // Если для filename указать значение вида '[name].js' (с квадратными скобками), то имя бандла будет взято
 * // из свойства 'entry' объекта конфига сборщика
 * // Создаст бандл [name].js в каталоге './dist' - './dist/[name].js'
 * output: setOutput()
 *
 * // Вернет { filename: 'app.js', path: nodePath.resolve(__dirname, 'prod') } - объект по умолчанию.
 * // Положит бандл по пути './prod/app.js'.
 * setOutput({ filename: 'app.js', path: nodePath.resolve(__dirname, 'prod') })
 */
module.exports = (options = defaultOptions) => {
  return {
    output: {
      filename: options.filename,
      path: options.path
    }
  }
};
