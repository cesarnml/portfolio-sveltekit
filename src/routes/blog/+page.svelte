<script lang="ts">
	import { page } from '$app/stores'
	import BlogPostCard from '$lib/components/blog/BlogPostCard.svelte'
	import InfiniteLoading from 'svelte-infinite-loading'

	const limit = 1
	export let data
	const { views, posts } = data

	let sliceStep = 4

	$: list = posts.slice(0, sliceStep)

	type Detail = {
		loaded: () => void
		complete: () => void
	}

	const onInfinite = async (e: CustomEvent<Detail>) => {
		const { complete, loaded } = e.detail
		if (sliceStep <= posts.length) {
			sliceStep += limit
			loaded()
		} else {
			complete()
		}
	}
</script>

<svelte:head>
	<title>Cesar's Blog Posts</title>
	<meta
		name="description"
		content="All of Cesar's blog posts on tech and web development live here."
	/>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="space-y-4">
	<h1 class="text-2xl">All Posts</h1>
	<div class="blog-list grid grid-cols-1 gap-5 md:grid-cols-6">
		{#each list as post (post.slug)}
			<BlogPostCard {post} view={views.find((view) => view.slug === post.slug)} />
		{/each}
		<InfiniteLoading on:infinite={onInfinite}>
			<aside slot="noMore" />
			<aside slot="noResults" />
		</InfiniteLoading>
	</div>
</div>

<style lang="postcss">
	@media (min-width: 768px) {
		:global(.blog-list > :nth-child(6n + 1)) {
			grid-column: span 3;
		}

		:global(.blog-list > :nth-child(6n + 2)) {
			grid-column: span 3;
		}

		:global(.blog-list > :nth-child(6n + 3)) {
			grid-column: span 4;
		}

		:global(.blog-list > :nth-child(6n + 4)) {
			grid-column: span 2;
		}

		:global(.blog-list > :nth-child(6n + 5)) {
			grid-column: span 3;
		}

		:global(.blog-list > :nth-child(6n + 6)) {
			grid-column: span 3;
		}

		:global(.blog-list > :nth-child(6n + 5)) {
			grid-column: span 2;
		}

		:global(.blog-list > :nth-child(6n + 6)) {
			grid-column: span 4;
		}
	}
</style>
