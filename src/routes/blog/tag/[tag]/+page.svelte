<script lang="ts">
	import { page } from '$app/stores'
	import { Url } from '$lib/url'

	export let data
	$: ({ posts } = data)
</script>

<svelte:head>
	<title>Blog Posts on {$page.params.tag?.toUpperCase()}</title>
	<meta name="description" content={`All blog post with tag ${$page.params.tag}`} />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="space-y-8">
	<h2>{$page.params.tag?.toUpperCase()}</h2>
	<ul class="grid grid-cols-1 gap-8 md:grid-cols-2">
		{#each posts as post (post.slug)}
			<div class="card card-hover">
				<a href={Url.BlogDetail(post.slug)}>
					<div class="card-header">{post.title}</div>
				</a>
				<section class="p-4">{post.description}</section>
			</div>
		{/each}
	</ul>
</div>
