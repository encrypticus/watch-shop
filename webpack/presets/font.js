const fontLoader = require('../loaders/font-loader');

// Объект настроек по умолчанию
const defaultOptions = {
  fontLoader: {
    name: './fonts/[name].[ext]'
  },
  exclude: [/img/],
  regexp: /\.(woff|woff2|eot|ttf|otf|svg)$/
};

/**
 * @description это свойство объекта конфига сборщика, в котором задаются правила, по которым
 * сборщик будет обрабатывать файлы с тем или иным расширением (модули), а также указываются лоадеры,
 * которые будут обрабатывать эти файлы.
 * fileLoader - это объект настроек для лоадера file-loader
 * exclude указывает на ресурсы, которые не будут обрабатываться лоадером. В данном случае по умолчанию для свойства
 * exclude задано регулярное выражение '/img/', таким образом лоадер будет обрабатывать все шрифты, кроме тех,
 * в url-путях которых присутствует подстрока 'img'. Это нужно для того, чтобы лоадер обрабатывал svg-шрифты, но
 * не обрабатывал svg-изображения. Например лоадер обработает шрифт, указанный в стилевом правиле
 * как src: url('fonts/Abril.svg), но не обработает изображение, указанное как background-image: url('img/sun.svg').
 * @param {Object} options настройки для пресета
 * @returns {Object} свойство объекта конфига сборщика, пресет для файлов шрифтов
 * @example
 * const processFonts = require('./webpack/presets/font');
 * // вызов с настройками по умолчанию
 * processFonts();
 * // вызов со своими настройками
 * processFonts({
 *  exclude: [\images\]
 *  regexp: /\.(woff|woff2|eot|ttf|otf|svg)$/
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    module: {
      rules: [
        {
          test: options.regexp,
          exclude: options.exclude,
          use: [
            fontLoader(options.fontLoader)
          ]
        }
      ]
    }
  }
};
