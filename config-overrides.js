const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
    '@core': path.resolve(__dirname, 'src/core')
  })
);