<script lang="ts">
	import { page } from '$app/stores'
	import { Url } from '$lib/url'
	import type { PageData } from './$types'
	import { Paginator } from '@skeletonlabs/skeleton'
	import Picture from '$lib/components/Picture.svelte'

	export let data: PageData
	const { posts, tags } = data

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
			<a class="card card-hover variant-glass-surface " href={Url.BlogDetail(post.slug)}>
				<header><Picture class="object-cover" src={post.image} alt="blog" /></header>
				<div class="p-4">
					<div class="mb-4">
						<h3 class="mb-1 font-bold">{post.title}</h3>
						<div>{post.description}</div>
					</div>
					<footer class="flex justify-between text-sm ">
						<span>{new Date(post.date).toDateString()}</span><span>{post.readingTime.text}</span>
					</footer>
				</div>
			</a>
		{/each}
	</div>
	<hr />
	<Paginator bind:settings={paginator} />
</div>
