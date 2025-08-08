export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      '.astro/',
      '*.config.js',
      'public/',
      '.vscode/',
      '.git/',
      'coverage/',
      '**/*.min.js',
    ],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        document: 'readonly',
        window: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-unused-vars': 'error',
      'no-var': 'error',
    },
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: (await import('astro-eslint-parser')).default,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: {
      astro: (await import('eslint-plugin-astro')).default,
      prettier: (await import('eslint-plugin-prettier')).default,
    },
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'prettier/prettier': 'error',
    },
  },
  (await import('eslint-config-prettier')).default,
];
