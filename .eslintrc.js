module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        bracketSpacing: true,
        trailingComma: 'es5',
        singleQuote: true,
        jsxBracketSameLine: false,
      },
    ],
  },
};
