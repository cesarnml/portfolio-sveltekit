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

	const wordsPerMinute = 50
	/**
	 * @param time in milliseconds
	 */
	function adjustReadingTime(time: number, wordsPerMinute: number) {
		const defaultWordsPerMinute = 200
		const sec2ms = 1000
		const min2sec = 60
		const conversionFactor = defaultWordsPerMinute / wordsPerMinute
		const newMinutes = Math.ceil((time * conversionFactor) / sec2ms / min2sec)
		const isSingular = newMinutes === 1
		return isSingular ? `${newMinutes} minute` : `${newMinutes} minutes`
	}

	onMount(async () => {
		/**
		 * .remark-code-title is a hidden element that contains the code language (e.g. JavaScript)
		 *  It's used to add the code language to the copy button
		 */
		const remarkCodeTitles = document.querySelectorAll('.remark-code-title')
		const preElements = document.querySelectorAll('pre')
		// Add a copy button to each markdown code block
		preElements.forEach((ele, index) => {
			const oldHtml = ele.innerHTML
			const newHtml = "<div class='pre-wrap overflow-x-auto'>" + oldHtml + '</div>'
			ele.innerHTML = newHtml
			const codeEle = ele.querySelector('code')
			if (codeEle) {
				codeEle.className = 'unstyled' // prevent application of dark mode styles
			}
			const remarkCodeTitle = remarkCodeTitles[index] as HTMLElement
			const button = document.createElement('button')
			button.className = 'btn variant-filled-primary btn-sm m-3 absolute top-0 right-0'
			button.textContent = remarkCodeTitle.textContent
			button.role = 'button'
			button.addEventListener('click', handleCopyClick)
			ele.prepend(button)
		})
	})
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />

<div class="hidden absolute w-[240px] xl:inline-block h-full top-8 -right-[240px]">
	<TableOfContents
		target="#toc-target"
		class="top-8 card variant-soft-primary sticky p-4"
		width="w-fit"
		regionList="list-none font-semibold"
	/>
</div>

<article
	class="dark:prose-invert prose-a:no-underline hover:prose-a:text-secondary-800 dark:hover:prose-a:text-primary-500 prose-headings:mt-0 max-w-screen-2md prose"
>
	<section class="mb-4">
		<ArticleTitle title={data.frontmatter.title} />
		<ArticleMeta
			author={data.frontmatter.author}
			date={data.frontmatter.date}
			readingTime={adjustReadingTime(data.frontmatter.readingTime.time, wordsPerMinute)}
			wordCount={data.frontmatter.readingTime.words}
			image={data.frontmatter.image}
		/>
	</section>
	<div class="mb-2 space-x-5">
		{#each data.frontmatter.tags as tag (tag)}
			<span class="badge variant-ringed-primary"><a href={`/blog/tag/${tag}`}>{`#${tag}`}</a></span>
		{/each}
	</div>
	<section id="toc-target" data-testid="raw-html-wrapper">
		{@html data.html}
	</section>
</article>
