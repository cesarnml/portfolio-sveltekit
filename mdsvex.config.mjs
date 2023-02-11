// @ts-nocheck

import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkAbbr from 'remark-abbr'
import remarkCodeTitles from 'remark-code-titles'
import remarkExternalLinks from 'remark-external-links'
import remarkGithub from 'remark-github'
import remarkReadingTime from 'remark-reading-time'
import highlighter from './src/lib/codeHighlighter.mjs'
import { repository } from './src/lib/config.js'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool',
	},
	highlight: { highlighter },
	remarkPlugins: [
		[remarkAbbr, { expandFirst: true }],
		[remarkGithub, { repository }],
		remarkReadingTime(),
		remarkCodeTitles,
		[remarkExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }],
	],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap',
			},
		],
	],
})

export default config
