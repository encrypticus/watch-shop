const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge'); // объединяет массивы и объекты конфигураций из нескольких файлов-модулей
const setEntry = require('./webpack/options/entry'); // опция устанавливает точку входа для сборщика
const setOutput = require('./webpack/options/output'); // опция устанавливает путь, по которому будет лежать бандл
const htmlWebpackPlugin = require('./webpack/plugins/html-webpack-plugin'); // плагин генерирует html-файл в папке сборки
const processCss = require('./webpack/presets/css'); // пресет обрабатывает css-файлы
const processSassScss = require('./webpack/presets/sass-scss'); // пресет обрабатывает sass/scss-файлы
const processImages = require('./webpack/presets/img'); // пресет обрабатывет изображения
const processFonts = require('./webpack/presets/font'); // пресет обрабатывает шрифты
const processPug = require('./webpack/presets/pug'); // пресет обрабатывает pug-файлы
const miniCssExtractPlugin = require('./webpack/plugins/mini-css-extract-plugin'); // модуль обрабатывает css-файлы
const addOptimization = require('./webpack/options/optimization'); // опция добавляет оптимизацию для конечного кода
const generateMap = require('./webpack/options/source-map'); // опция включает генерацию карты js/css-кода (sourcemap)
const enableStylelint = require('./webpack/plugins/stylelint-webpack-plugin'); // плагин включает линтинг css/sass/scss
const processJs = require('./webpack/presets/js'); // пресет обрабатывает js-файлы
const browserSync = require('./webpack/plugins/browser-sync-webpack-plugin'); // плагин browser sync
const cleanWebpackPlugin = require('./webpack/plugins/clean-webpack-plugin'); // плагин очищает папку сборки перед каждой пересборкой
const aliases = require('./webpack/options/aliases'); // алиасы для путей
const copy = require('./webpack/plugins/copy-webpack-plugin'); // копирование файлов в dist

module.exports = () => {
  const commonConfig = webpackMerge(
    setEntry({
      index: './src/index.js'
    }),
    htmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug'
    }),
    setOutput(),
    miniCssExtractPlugin(),
    processCss(),
    processSassScss(),
    processImages(),
    processFonts(),
    processPug(),
    processJs(),
    cleanWebpackPlugin(),
    enableStylelint(),
    aliases(),
    copy([
      {
        from: 'src/favicons',
        to: 'favicons'
      },
      {
        from: 'src/components/card/img',
        to: 'img'
      },
      {
        from: 'src/components/strap-card/img',
        to: 'img'
      },
      {
        from: 'src/components/card-carousel/img',
        to: 'img'
      }
    ]),
    {
      devServer: {
        historyApiFallback: true
      }
    }
  );

  if (process.env.mode === 'development') {
    return webpackMerge(
      commonConfig,
      generateMap(),
      browserSync()
    );
  }

  if (process.env.mode === 'production') {
    return webpackMerge(
      commonConfig,
      addOptimization()
    );
  }
};
