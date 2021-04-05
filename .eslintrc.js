module.exports = {
  'parser': '@babel/eslint-parser',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'ecmaFeatures': {
      'globalReturn': false,
    },
    'babelOptions': {
      'configFile': './babel.config.json',
    },
  },
  'env': {
    'browser': true,
    'node': true,
    'es6': true,
  },
  'extends': ['eslint:recommended', 'google'],
};
