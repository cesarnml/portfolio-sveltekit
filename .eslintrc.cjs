/* eslint-disable global-require */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'prettier',
	],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs', '*.mjs'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
			rules: {
				'import/first': 0,
				'import/order': 0,
				'import/no-mutable-exports': 0,
				'@typescript-eslint/no-use-before-define': 0,
			},
		},
	],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.json',
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		'@typescript-eslint/no-shadow': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-throw-literal': 0,
		'no-plusplus': 0,
		'consistent-return': 0,
		'no-lonely-if': 0,
		'prefer-const': 0,
		'no-param-reassign': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': 0,
		'import/prefer-default-export': 0,
		'import/no-unresolved': 0,
	},
}
