module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // activate vue related rules
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  // required to lint *.vue files
  plugins: ['vue', 'nuxt'],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    semi: ['error', 'never', {beforeStatementContinuationChars: 'always'}],
    quotes: ['off', 'single'],
    'no-multiple-empty-lines': ['error', {max: 2, maxBOF: 1}],
    'space-in-parens': ['error', 'never'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-blocks': ['error', 'always'],
    'no-empty': 'warn',
    'no-duplicate-imports': 'error',
    'no-undef': 'off',
    'no-unused-vars': 'warn',
    'vue/multi-word-component-names': 'off'
  },
  globals: {}
}
