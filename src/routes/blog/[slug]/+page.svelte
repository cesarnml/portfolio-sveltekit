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
		// Get all <pre> elements
		const preElements = document.querySelectorAll('pre')

		// For each <pre> element
		preElements.forEach((ele) => {
			// Track if it's being hovered (needed for "focus" code styling)
			ele.addEventListener('mouseenter', () => ele.classList.add('hovered'))
			ele.addEventListener('mouseleave', () => ele.classList.remove('hovered'))

			const codeWrapper = ele.querySelector('.code-wrapper')
			const codeEle = ele.querySelector('code')

			const buttonCopy = ele.querySelector('.code-copy-btn') as HTMLButtonElement
			const buttonWrap = ele.querySelector('.code-wrap-btn')

			// OnMount determine if we should show/hide wrap button
			let hasHorizontalScroll = codeWrapper ? codeWrapper.scrollWidth > codeWrapper.clientWidth : false
			if (hasHorizontalScroll) {
				buttonWrap?.classList.remove('hidden')
			}

			// Show wrap button if code-wrapper has horizontal scroll bar
			window?.addEventListener(
				'resize',
				() => {
					hasHorizontalScroll = codeWrapper ? codeWrapper.scrollWidth > codeWrapper.clientWidth : false
					if (buttonWrap) {
						if (hasHorizontalScroll) {
							buttonWrap.classList.remove('hidden')
						} else {
							buttonWrap.classList.add('hidden')
							buttonWrap.textContent = 'Wrap'
							codeEle?.classList.remove('whitespace-pre-wrap')
						}
					}
				},
				{ passive: true },
			)

			// Enable wrap button behavior on click
			if (buttonWrap) {
				buttonWrap.addEventListener('click', (e) => {
					codeEle?.classList.toggle('whitespace-pre-wrap')
					if (!buttonWrap.textContent?.includes('NoWrap')) {
						buttonWrap.textContent = 'NoWrap'
					} else {
						buttonWrap.textContent = 'Wrap'
					}
				})
			}

			// Enable copy button behavior click
			if (buttonCopy) {
				buttonCopy.addEventListener('click', handleCopyClick)
			}
		})
	})
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />

<div class="absolute top-8 -right-[240px] hidden h-full w-[240px] xl:inline-block">
	<TableOfContents
		target="#toc-target"
		class="card variant-soft-primary sticky top-8 p-4"
		width="w-fit"
		regionList="list-none font-semibold"
	/>
</div>

<article
	class="prose max-w-screen-2md prose-a:no-underline hover:prose-a:text-secondary-800 dark:prose-invert dark:hover:prose-a:text-primary-500"
>
	<section class="mb-4">
		<ArticleTitle title={data.frontmatter.title} />
		<ArticleMeta
			author={data.frontmatter.author}
			date={data.frontmatter.date}
			readingTime={data.frontmatter.readingTime.text}
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
