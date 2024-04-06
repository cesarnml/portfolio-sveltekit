/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:svelte/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'prettier',
	],
	ignorePatterns: ['*.cjs', '*.mjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
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
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	// settings: {
	// 	'svelte3/typescript': () => require('typescript'),
	// },
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
		'svelte/no-at-html-tags': 0,
		'import/order': 0,
		'import/no-mutable-exports': 0,
		'no-inner-declarations': 0,
		'@typescript-eslint/no-unsafe-member-access': 0, // Try to fix
		'@typescript-eslint/no-unsafe-assignment': 0, // Try to fix
		'@typescript-eslint/no-unsafe-call': 0, // Try to fix
		'@typescript-eslint/restrict-template-expressions': 0, // Try to fix
		'@typescript-eslint/no-unsafe-argument': 0, // Try to fix
		'@typescript-eslint/no-redundant-type-constituents': 0, // Try to fix
	},
}
