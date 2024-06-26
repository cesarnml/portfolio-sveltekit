<script lang="ts">
	import { onMount } from 'svelte'
	import PageHead from '$lib/components/PageHead.svelte'
	import ArticleTitle from '$lib/components/blog/ArticleTitle.svelte'
	import ArticleMeta from '$lib/components/blog/ArticleMeta.svelte'
	import handleCopyClick from '$lib/handleCopyClick'

	import '$lib/styles/shiki.css'
	import { page } from '$app/stores'

	export let data

	onMount(async () => {
		// Get all <pre> elements
		const preElements = document.querySelectorAll('pre')
		const scrollPage = document.querySelector('#appShell #page')

		const incrementView = async () => {
			try {
				await fetch(`/api/blog/${$page.params.slug}/view`, {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
				})
			} catch (error) {
				console.error('Failed to increment view count', error)
			}
		}

		scrollPage?.addEventListener('scroll', () => incrementView, { once: true })
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
			let hasHorizontalScroll = codeWrapper
				? codeWrapper.scrollWidth > codeWrapper.clientWidth
				: false
			if (hasHorizontalScroll) {
				buttonWrap?.classList.remove('hidden')
			}

			// Show wrap button if code-wrapper has horizontal scroll bar
			window?.addEventListener(
				'resize',
				() => {
					hasHorizontalScroll = codeWrapper
						? codeWrapper.scrollWidth > codeWrapper.clientWidth
						: false
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
				buttonWrap.addEventListener('click', () => {
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
				buttonCopy.addEventListener('click', () => handleCopyClick)
			}
		})
	})
</script>

<PageHead
	title={data.frontmatter.title}
	description={data.frontmatter.description}
	image={data.frontmatter.image}
/>

<!-- <div class="absolute -right-[240px] top-8 hidden h-full w-[240px] xl:inline-block">
	<TableOfContents
		target="#toc-target"
		class="card variant-soft-primary sticky top-8 p-4"
		width="w-fit"
		regionList="list-none font-semibold"
	/>
</div> -->

<article class="prose max-w-screen-2md dark:prose-invert prose-a:no-underline">
	<section class="mb-4">
		<ArticleTitle title={data.frontmatter.title} slug={$page.params.slug} />
		<ArticleMeta
			author={data.frontmatter.author}
			date={data.frontmatter.date}
			readingTime={data.frontmatter.readingTime.text}
			wordCount={data.frontmatter.readingTime.words}
			image={data.frontmatter.image}
			viewCount={data.view?.count ?? 1}
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

<style lang="postcss">
	:global(.permalink) {
		opacity: 0;
		transition: all 0.3s ease-in-out;
		margin-left: 0.5rem;
	}
	:global(h2:hover .permalink, h3:hover .permalink) {
		opacity: 1;
	}
	:global(.toc-list-item) {
		@apply text-sm font-normal;
	}
</style>
