<script lang="ts">
	import { page } from '$app/stores'
	import { Url } from '$lib/url'
	import type { PageData } from './$types'

	export let data: PageData
	const { posts } = data
</script>

<svelte:head>
	<title>Blog Posts on {$page.params.tag.toUpperCase()}</title>
	<meta name="description" content={`All blog post with tag ${$page.params.tag}`} />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div>
	<h2>All blog posts tagged as: {$page.params.tag}</h2>
	<ul>
		{#each posts as post (post.slug)}
			<li><a href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>
