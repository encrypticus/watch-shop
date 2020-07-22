const terserWebpackPlugin = require('../plugins/terser-webpack-plugin'); // минификатор js

// Оъект настроек по умолчанию
const defaultOptions = {
  minimizer: [
    // Параметр optimization.minimizer переопределяет значения по умолчанию, предоставляемые сборщиком,
    // поэтому нужно обязательно указать также JS minimizer:
    terserWebpackPlugin({
      sourceMap: true,
      extractComments: false,
      terserOptions: {
        output: {
          comments: false
        }
      }
    }),
  ],
  splitChunks: {
    chunks: 'all',
    maxInitialRequests: Infinity,
    minSize: 0,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name(module) {
          // получает имя, то есть node_modules/packageName/not/this/part.js
          // или node_modules/packageName
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

          // имена npm-пакетов можно, не опасаясь проблем, использовать
          // в URL, но некоторые серверы не любят символы наподобие @
          return `npm.${packageName.replace('@', '')}`;
        },
      },
    },
  }
};

/**
 *
 * @param {Object} options объект настроек по умолчанию
 * @returns {Object} значение для свойства optimization объекта конфига сборщика
 */
module.exports = (options = defaultOptions) => {
  return {
    optimization: options
  }
};
