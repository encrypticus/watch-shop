const cssLoader = require('../loaders/css-loader');
const styleLoader = require('../loaders/style-loader');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssLoader = require('../loaders/postcss-loader');

// Объект настроек по умолчанию
const defaultOptions = {
  styleLoader: {},
  cssLoader: {
    sourceMap: true
  },
  postcssLoader: {
    config: {
      path: require('path').resolve('./webpack/configs/')
    }
  }
};

/** @description module - это свойство объекта конфига сборщика, в котором задаются правила, по которым
 * сборщик будет обрабатывать файлы с тем или иным расширением (модули), а также указываются лоадеры,
 * которые будут обрабатывать эти файлы.
 * @param {Object} options настройки для пресета
 * @returns {Object} свойство объекта конфига сборщика, пресет для css-файлов
 * @example
 * const processCss = require('./webpack/presets/css');
 * // вызов с настройками по умолчанию
 * processCss()
 * // вызов со своими настройками
 * processCss({
 *  styleLoader: {
 *    injectType: 'singletonStyleTag'
 *  }
 * })
 *
 * processCss({
 *  cssLoader: {
 *    sourceMap: false
 *  }
 * })
 *
 * processCss({
 *  postscssLoader: {
 *    plugins: [
 *      require('autoprefixer')(),
 *      require('cssnano')({
 *        preset: 'default'
 *      }),
 *      require('mqpacker')()
 *    ],
 *    sourceMap: false
 *  }
 * })
 */
module.exports = (options = defaultOptions) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            process.env.mode === 'development' ? styleLoader(options.styleLoader) : miniCssExtractPlugin.loader,
            cssLoader(options.cssLoader),
            postcssLoader(options.postcssLoader)
          ]
        }
      ]
    }
  }
};
