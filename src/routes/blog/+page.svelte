<script lang="ts">
	import { page } from '$app/stores'
	import BlogPostCard from '$lib/components/blog/BlogPostCard.svelte'
	import InfiniteLoading from 'svelte-infinite-loading'

	const limit = 1
	export let data
	const { views, posts } = data

	let sliceStep = 3

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
	<h2 class="font-bold">All Posts</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each list as post (post.slug)}
			<BlogPostCard {post} view={views.find((view) => view.slug === post.slug)} />
		{/each}
		<InfiniteLoading on:infinite={onInfinite} distance={0}>
			<aside slot="noMore" class="alert variant-ghost">
				<div class="alert-message">
					<p>Wow! You really enjoy reading. Suggest a new topic!</p>
				</div>
			</aside>
			<aside slot="noResults" class="alert variant-ghost">Empty Placeholder</aside>
		</InfiniteLoading>
	</div>
	<hr />
</div>
