/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineMDSveXConfig as defineConfig } from 'mdsvex'
import rehypeSlug from 'rehype-slug'
import remarkAbbr from 'remark-abbr'
import remarkCodeTitles from 'remark-code-titles'
import remarkExternalLinks from 'remark-external-links'
import remarkGithub from 'remark-github'
import remarkReadingTime from 'remark-reading-time'
import highlighter from './src/lib/codeHighlighter.js'
import { repository } from './src/lib/config.js'

const config = defineConfig({
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool',
	},
	// @ts-ignore
	highlight: { highlighter },
	remarkPlugins: [
		[remarkAbbr, { expandFirst: true }],
		[remarkGithub, { repository }],
		remarkReadingTime(),
		remarkCodeTitles,
		[remarkExternalLinks, { target: '_blank', rel: 'noopener noreferrer' }],
	],
	rehypePlugins: [
		// @ts-expect-error
		rehypeSlug,
	],
})

export default config
