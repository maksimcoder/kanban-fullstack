module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    env: {
      node: true,
      es6: true
    },
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:prettier/recommended'
    ],
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },
    rules: {
      'prettier/prettier': ['error']
    }
  };
  