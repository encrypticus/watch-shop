/**
 * Autoprefixer - плагин, добавляющий вендорные префиксы к css-свойствам.
 * Плагин использует свойство 'browserslist' из package.json.
 * Подробнее о browserlist - https://github.com/browserslist/browserslist.
 * @see https://github.com/postcss/autoprefixer#readme
 *
 * Cssnano - плагин, оптимизирующий css
 * @see https://cssnano.co/
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {
      preset: 'default'
    }
  },
  sourceMap: true
};
