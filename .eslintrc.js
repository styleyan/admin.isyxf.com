module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 新文件最后是否有空行
    'eol-last': 0,
    // 方法前面是否有空格
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    // 对象数组后面要加逗号
    'comma-dangle': ['error', 'always-multiline'],
    'camelcase': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
