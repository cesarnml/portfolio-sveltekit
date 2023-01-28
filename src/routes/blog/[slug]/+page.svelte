<script lang="ts">
	import '@styles/shiki.css'
	import { onMount } from 'svelte'
	import type { PageServerData } from './$types'
	import PageHead from '@components/PageHead.svelte'
	import ArticleTitle from '@components/ArticleTitle.svelte'
	import ArticleMeta from '@components/ArticleMeta.svelte'
	import { handleCopyClick } from '@lib/handleCopyClick'
	import { TableOfContents } from '@skeletonlabs/skeleton'
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

<div class="hidden absolute w-[240px] xl:inline-block h-full top-0 -right-[264px]">
	<TableOfContents
		target="#toc-target"
		class="sticky p-4 top-8 card variant-soft-primary"
		width="w-fit"
		hover="dark:hover:text-primary-400 hover:text-secondary-900"
		regionList="list-none font-semibold"
	/>
</div>

<article>
	<section class="mb-8">
		<ArticleTitle title={data.frontmatter.title} />
		<ArticleMeta
			author={data.frontmatter.author}
			date={data.frontmatter.date}
			readingTime={data.frontmatter.readingTime.text}
			wordCount={data.frontmatter.readingTime.words}
			image={data.frontmatter.image}
		/>
	</section>
	<section id="toc-target" data-testid="raw-html-wrapper" class="">
		{@html data.html}
	</section>
</article>
