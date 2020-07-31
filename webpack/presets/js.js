const babelLoader = require('../loaders/babel-loader');
const eslintLoader = require('../loaders/eslint-loader');

// Объект настроек по умолчанию
defaultOptions = {
  babelLoader: {
    configFile: require('path').resolve(__dirname, '../configs/babel.config.js')
  },
  eslintLoader: {
    emitWarning: true,
    configFile: require('path').resolve(__dirname, '../configs/.eslintrc.js'),
    fix: true
  },
  exclude: /node_modules/
};

/**
 * @description module - это свойство объекта конфига сборщика, в котором задаются правила, по которым
 * сборщик будет обрабатывать файлы с тем или иным расширением (модули), а также указываются лоадеры,
 * которые будут обрабатывать эти файлы.
 * babelLoader - это объект настроек для лоадера babel-loader
 * eslintLoader - это объект настроек для лоадера eslint-loader
 * @param {Object} options настройки для пресета
 * @returns {Object} свойство объекта конфига сборщика, пресет для js-файлов
 * @example
 * const processJs = require('./webpack/presets/js');
 * // вызов с настройками по умолчанию
 * processJs();
 * //вызов со своими настройками
 * processJs({
 *  eslintLoader: {
 *    configFile: require('path').resolve(__dirname, '../../.eslintrc.js'),
 *    cache: true,
 *    formatter: require('eslint-friendly-formatter')
 *  },
 *  exclude: /node_modules/
 * })
 */
module.exports = (options = defaultOptions) => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: options.exclude,
          use: [
            babelLoader(options.babelLoader),
            // eslintLoader(options.eslintLoader)
          ]
        }
      ]
    }
  }
};
