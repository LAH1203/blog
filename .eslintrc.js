module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'import', 'css-import-order'],
  extends: [
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:css-import-order/recommended',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'external',
          'builtin',
          'internal',
          ['index', 'sibling', 'parent'],
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@/*',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
