<script lang="ts">
	import { page } from '$app/stores'
	import BlogPostCard from '$lib/components/blog/BlogPostCard.svelte'
	import HomeCTA from '$lib/components/home/HomeCTA.svelte'

	export let data

	$: ({ latestPosts, popularPosts, views } = data)
</script>

<svelte:head>
	<title>Cesar's Web Portfolio</title>
	<meta
		name="description"
		content="Explore my web portfolio and tech blog for insights on the latest trends in technology. Discover my creative designs and development skills in the portfolio, while the blog features in-depth analysis and expert tips on various tech topics. Join me on a journey of innovation and inspiration."
	/>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="space-y-8">
	<div class="py-8">
		<HomeCTA />
	</div>
	<h3>Recently Published</h3>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		{#each latestPosts as post (post.slug)}
			<BlogPostCard {post} view={views.find((view) => view.slug === post.slug)} />
		{/each}
	</div>
	<h3>Popular Articles</h3>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each popularPosts as post (post.slug)}
			<BlogPostCard {post} view={views.find((view) => view.slug === post.slug)} />
		{/each}
	</div>
</div>
