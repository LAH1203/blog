import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      'import/no-anonymous-default-export': [
        'off',
        {
          allowArray: true,
          allowArrowFunction: true,
          allowAnonymousClass: true,
          allowAnonymousFunction: true,
          allowCallExpression: true,
          allowNew: true,
          allowLiteral: true,
          allowObject: true,
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
            'unknown',
          ],
          pathGroups: [
            {
              pattern: 'next',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '**/*.css',
              group: 'unknown',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  // ...tailwind.configs['flat/recommended'],
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'next/typescript', 'plugin:import/recommended'],
  }),
];
