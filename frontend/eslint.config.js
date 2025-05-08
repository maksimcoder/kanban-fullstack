import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import simpleSortPluginEsLint from 'eslint-plugin-simple-import-sort';
import pluginQuery from '@tanstack/eslint-plugin-query';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [...pluginQuery.configs['flat/recommended'], js.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier, eslintPluginPrettier],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleSortPluginEsLint
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
