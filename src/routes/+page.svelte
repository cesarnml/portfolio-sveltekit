<script lang="ts">
	import { page } from '$app/stores'
	import { Url } from '@lib/url'
	import type { PageData } from './$types'
	export let data: PageData

	const { posts } = data
</script>

<svelte:head>
	<title>Cesar Mejia's Web Portfolio</title>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div>
	<ul>
		{#each posts as post (post.slug)}
			<li class="mb-4"><a class="unstyled" href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>
