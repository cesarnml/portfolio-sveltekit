<script lang="ts">
	import { page } from '$app/stores'
	import { Paginator } from '@skeletonlabs/skeleton'
	import BlogPostCard from '$lib/components/blog/BlogPostCard.svelte'

	export let data
	const { posts, tags, views } = data

	$: paginator = {
		offset: 0,
		limit: 4,
		size: posts.length,
		amounts: [4, 8, 20, 50],
	}

	$: paginatedData = posts.slice(
		paginator.offset * paginator.limit,
		paginator.offset * paginator.limit + paginator.limit,
	)
</script>

<svelte:head>
	<title>Cesar's Blog Posts</title>
	<meta
		name="description"
		content="All of Cesar's blog posts on tech and web development live here."
	/>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="mb-4 space-x-4 overflow-x-auto">
	{#each tags as tag (tag)}
		<a href={`/blog/tag/${tag}`} class="btn-base btn variant-soft-primary">{`#${tag}`}</a>
	{/each}
</div>

<div class="space-y-4">
	<h2 class="font-bold">All Posts</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each paginatedData as post (post.slug)}
			<BlogPostCard {post} view={views.find((view) => view.slug === post.slug)} />
		{/each}
	</div>
	<hr />
	<Paginator bind:settings={paginator} />
</div>
