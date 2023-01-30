import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import autolinkHeadings from 'rehype-autolink-headings'
import slugPlugin from 'rehype-slug'
import remarkExternalLinks from 'remark-external-links'
import remarkCodeTitles from 'remark-code-titles'
import readingTime from 'remark-reading-time'
import highlighter from './src/lib/codeHighlighter.mjs'

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	highlight: { highlighter },

	remarkPlugins: [
		readingTime(),
		remarkCodeTitles,
		// external links open in a new tab
		[remarkExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }]
	],
	rehypePlugins: [
		slugPlugin,
		[
			autolinkHeadings,
			{
				behavior: 'wrap'
			}
		]
	]
})

export default config
