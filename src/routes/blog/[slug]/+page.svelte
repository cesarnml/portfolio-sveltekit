<script lang="ts">
	import '@styles/shiki.css'
	import { onMount } from 'svelte'
	import type { PageServerData } from './$types'
	import PageHead from '@components/PageHead.svelte'
	import ArticleTitle from '@components/ArticleTitle.svelte'
	import ArticleMeta from '@components/ArticleMeta.svelte'
	import { handleCopyClick } from '@lib/handleCopyClick'
	export let data: PageServerData

	onMount(async () => {
		/**
		 * .remark-code-title is a hidden element that contains the code language (e.g. JavaScript)
		 *  It's used to add the code language to the copy button
		 */
		const remarkCodeTitles = document.querySelectorAll('.remark-code-title')
		const preElements = document.querySelectorAll('pre')
		// Add a copy button to each markdown code block
		preElements.forEach((ele, index) => {
			const codeEle = ele.querySelector('code')
			if (codeEle) {
				codeEle.className = 'unstyled' // prevent application of dark mode styles
			}
			const remarkCodeTitle = remarkCodeTitles[index] as HTMLElement
			const button = document.createElement('button')
			button.className = 'copy-code-to-clipboard'
			button.textContent = remarkCodeTitle.textContent
			button.role = 'button'
			button.addEventListener('click', handleCopyClick)
			ele.prepend(button)
		})
	})
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />
<div>{data.frontmatter.readingTime.text}</div>
<div>Word Count: {data.frontmatter.readingTime.words}</div>
<div data-testid="raw-html-wrapper">
	{@html data.html}
</div>
