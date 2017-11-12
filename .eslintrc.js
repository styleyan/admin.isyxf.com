// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 新文件最后是否有空行
    'eol-last': 0,
    // 方法前面是否有空格
    'space-before-function-paren': ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    // 对象数组后面要加逗号
    'comma-dangle': ['error', 'always-multiline']
  }
}
