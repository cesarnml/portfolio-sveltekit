<script lang="ts">
	import ReusableButton from '@components/ReusableButton.svelte'
	import { Url } from '@lib/url'
	import type { PageData } from './$types'

	export let data: PageData
	const { posts } = data
</script>

<div class="flex items-center justify-center">
	<ReusableButton />
</div>
<div>
	<ul>
		{#each posts as post (post.slug)}
			<li><a href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>
