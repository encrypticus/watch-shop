const path = require('path');

module.exports = () => {
  return {
    resolve: {
      alias: {
        '#': path.resolve(__dirname, 'src/'),
        '#comps': path.resolve(__dirname, '../../src/components'),
        '#conts': path.resolve(__dirname, '../../src/containers'),
        '#act': path.resolve(__dirname, '../../src/redux/actions'),
        '#red': path.resolve(__dirname, '../../src/redux/reducers'),
        '#store': path.resolve(__dirname, '../../src/redux/store.js'),
        '#pages': path.resolve(__dirname, '../../src/pages'),
        '#services': path.resolve(__dirname, '../../src/services'),
        '#context': path.resolve(__dirname, '../../src/context'),
        '#config': path.resolve(__dirname, '../../src/config'),
        '#const': path.resolve(__dirname, '../../src/config/constants')
      }
    }
  }
};
