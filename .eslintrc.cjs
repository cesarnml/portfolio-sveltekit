/* eslint-disable global-require */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:vitest-globals/recommended',
		'prettier',
	],
	plugins: ['svelte3', '@typescript-eslint', 'import'],
	ignorePatterns: ['*.cjs', '*.mjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
			},
		},
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: 'tsconfig.json',
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
		'vitest-globals/env': true,
	},
	globals: {
		Email: 'readonly',
	},
	rules: {
		'import/no-extraneous-dependencies': 0,
		'@typescript-eslint/no-shadow': 0,
		'@typescript-eslint/no-var-requires': 0,
		'import/prefer-default-export': 0,
		'@typescript-eslint/no-throw-literal': 0,
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'consistent-return': 0,
		'import/extensions': 0,
	},
}
