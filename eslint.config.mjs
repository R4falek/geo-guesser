import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      'no-undef': 'error',                 // No undefined variables
      'prefer-const': 'error',             // Use const when variable is not reassigned
      'no-var': 'error',                   // Use let/const instead of var

      // === SYNTAX & STYLE ===
      'no-console': 'warn',                // Warn about console.log (remove in production)
      'quotes': ['error', 'single'],       // Use single quotes
      'indent': ['error', 2],              // 2 spaces for indentation
      'comma-dangle': ['error', 'always-multiline'], // Trailing commas in multiline

      // === BEST PRACTICES ===
      'eqeqeq': 'error',                   // Use === and !== instead of == and !=
      'no-eval': 'error',                  // No eval()
      'no-implied-eval': 'error',          // No implied eval
      'no-alert': 'error',                 // No alert, confirm, prompt
      'curly': 'error',                    // Require curly braces for all control statements
      'no-else-return': 'error',           // No else after return in if

      // === FUNCTIONS ===
      'arrow-spacing': 'error',            // Spacing around arrow functions
      'prefer-arrow-callback': 'error',    // Prefer arrow functions as callbacks
      'no-duplicate-imports': 'error',     // No duplicate imports

      // === OBJECTS & ARRAYS ===
      'object-curly-spacing': ['error', 'always'], // Spaces inside object braces
      'array-bracket-spacing': ['error', 'never'], // No spaces inside array brackets
      'dot-notation': 'error',             // Use dot notation when possible

      // === SPACING & FORMATTING ===
      'space-before-blocks': 'error',      // Space before blocks
      'keyword-spacing': 'error',          // Space around keywords
      'space-infix-ops': 'error',          // Space around operators
      'no-trailing-spaces': 'error',       // No trailing whitespace
      'no-multiple-empty-lines': ['error', { max: 2 }], // Max 2 empty lines
    },
  }),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;
