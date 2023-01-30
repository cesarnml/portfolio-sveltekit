<script lang="ts">
	import { Url } from '@lib/url'
	import type { PageData } from './$types'

	export let data: PageData
	const { posts } = data
</script>

<div />
<div>
	<ul>
		{#each posts as post (post.slug)}
			<li><a class="unstyled" href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>
