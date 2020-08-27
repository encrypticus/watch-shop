module.exports = (api) => {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        debug: true,
        modules: false,
        useBuiltIns: 'usage'
      }
    ],
    '@babel/preset-react'
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    'babel-plugin-styled-components'
  ];

  return {
    presets,
    plugins
  }
};
