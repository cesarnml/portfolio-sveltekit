<script lang="ts">
	import { Url } from '$lib/url'
	import type { PageData } from './$types'

	export let data: PageData
	const { posts } = data
</script>

<div>
	<ul>
		{#each posts as post (post.slug)}
			<li><a href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>
