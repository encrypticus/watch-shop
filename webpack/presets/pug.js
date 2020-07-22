const htmlLoader = require('../loaders/html-loader');
const pugHtmlLoader = require('../loaders/pug-html-loader');

// Объект настроек по умолчанию
const defaultOptions = {
  htmlLoader: {
    attrs: ['img:src', 'video:poster', 'video:src']
  },
  pugHtmlLoader: {
    pretty: process.env.mode === 'development'
  }
};

/**
 * @description module - это свойство объекта конфига сборщика, в котором задаются правила, по которым
 * сборщик будет обрабатывать файлы с тем или иным расширением (модули), а также указываются лоадеры,
 * которые будут обрабатывать эти файлы.
 * htmlLoader - это объект настроек для лоадера html-loader
 * pugHtmlLoader - это объект настроек для лоадера pug-html-loader
 * @param {Object} options настройки для пресета
 * @returns {Object} свойство объекта конфига сборщика, пресет для pug-файлов
 */
module.exports = (options = defaultOptions) => {
  return {
    module: {
      rules: [
        {
          test: /\.pug/,
          use: [
            htmlLoader(options.htmlLoader),
            pugHtmlLoader(options.pugHtmlLoader)
          ]
        }
      ]
    }
  }
};
