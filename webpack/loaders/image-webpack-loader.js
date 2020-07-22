// Объект настроек по умолчанию
const defaultOptions = {
  mozjpeg: {
    progressive: true,
    quality: 65
  },
  optipng: {
    enabled: false,
  },
  pngquant: {
    quality: [0.65, 0.90],
    speed: 4
  },
  gifsicle: {
    interlaced: false,
  },
  webp: {
    quality: 75
  },
  svgo: {}
};

/**
 * @description этот лоадер производит оптимизацию изображений
 * @param {Object} options объект настроек лоадера
 * @returns {Object} loader конфиг лоадера
 * @see https://github.com/tcoopman/image-webpack-loader#readme
 * @example
 * const imageWebpackLoader = require('./webpack/loaders/image-webpack-loader');
 * // вызов с настройками по умолчанию
 * imageWebpackLoader();
 * // вызов со совоими настройками
 * imageWebpackLoader({
 *  mozjpeg: {
 *   progressive: false;
 *   quality: 80
 *  }
 * });
 */
module.exports = (options = defaultOptions) => {
  return {
    loader: 'image-webpack-loader',
    options
  }
};
