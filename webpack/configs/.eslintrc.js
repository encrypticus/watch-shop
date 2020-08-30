const path = require('path');

module.exports = {
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },

  env: {
    browser: true,
    es6: true
  },

  parser: 'babel-eslint',

  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'alias': {
        map: [
          ['#comps', path.resolve(__dirname, '../../src/components')],
          ['#conts', path.resolve(__dirname, '../../src/containers')],
          ['#act', path.resolve(__dirname, '../../src/redux/actions')],
          ['#red', path.resolve(__dirname, '../../src/redux/reducers')],
          ['#store', path.resolve(__dirname, '../../src/redux/store.js')],
          ['#pages', path.resolve(__dirname, '../../src/pages')],
          ['#services', path.resolve(__dirname, '../../src/services')],
          ['#context', path.resolve(__dirname, '../../src/context')]
        ]
      }
    }
  },

  rules: {
    radix: 'off',
    'max-len': 'off',
    'import/extensions': 'off',
    'no-unused-expressions': ['warn', { allowShortCircuit: true, allowTernary: true }],
    'no-shadow': 'off',
    'import/named': 'off',
    'no-underscore-dangle': 'off',
    'no-return-await': 'off',
    'consistent-return': 'off'
  }
};
