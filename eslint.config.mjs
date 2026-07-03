import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // Forbid hardcoded hex colors in JSX inline style props
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "JSXAttribute[name.name='style'] ObjectExpression Property > Literal[value=/^#[0-9a-fA-F]{3,8}$/]",
          message:
            'Use a CSS variable (var(--token)) instead of a hardcoded hex color in inline styles.',
        },
      ],
    },
  },
  prettier,
];
