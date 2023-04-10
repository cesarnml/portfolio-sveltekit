<script lang="ts">
	import { error } from '@sveltejs/kit'
	import { page } from '$app/stores'
	import BlogPostCard from '$lib/components/blog/BlogPostCard.svelte'
	import InfiniteLoading from 'svelte-infinite-loading'
	import type { Post } from '$lib/typings/blog.js'

	const limit = 1
	export let data
	const { posts, views } = data

	let list: Post[] = [...posts]

	type Detail = {
		loaded: () => void
		complete: () => void
	}

	const onInfinite = async (e: CustomEvent<Detail>) => {
		const { complete, loaded } = e.detail

		try {
			const response = await fetch(
				`/api/blog/posts?offset=${Math.floor((posts.length ?? 0) / limit)}&limit=${limit}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				},
			)
			const newPosts = await response.json()
			console.log('newPosts:', newPosts)

			if (!newPosts.length) {
				complete()
			} else {
				loaded()
			}
			// invalidate('posts:infinites')
			list = [...list, ...newPosts]
		} catch (err) {
			throw error(428, 'HMM')
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
		{#each posts as post (post.slug)}
			<BlogPostCard {post} view={views.find((view) => view.slug === post.slug)} />
		{/each}
		<InfiniteLoading on:infinite={onInfinite}>
			<div slot="noMore">What No more</div>
			<div slot="noResults">What No results</div>
		</InfiniteLoading>
	</div>
	<hr />
</div>
