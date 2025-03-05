// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const path = require('path');
const angular = require('angular-eslint');
const { includeIgnoreFile } = require('@eslint/compat');

const gitignorePath = path.resolve(__dirname, '.gitignore');

module.exports = tseslint.config(
	includeIgnoreFile(gitignorePath),
	{
		files: ['**/*.ts'],
		languageOptions: {
			sourceType: 'commonjs',
			parserOptions: {
				project: './tsconfig.json',
			},
			globals: {
				__dirname: true,
			},
		},
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
			...angular.configs.tsRecommended,
		],
		processor: angular.processInlineTemplates,
		rules: {
			'@typescript-eslint/array-type': ['error', { default: 'generic' }],
			'@angular-eslint/component-selector': ['error', { type: ['element', 'attribute'], prefix: 'pihub', style: 'kebab-case' }],
			'@typescript-eslint/no-confusing-void-expression': 'off',
		},
	},
	{
		files: ['**/*.html'],
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
		rules: {},
	}
);
