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

  settings: {
    react: {
      version: 'detect'
    }
  }
};
