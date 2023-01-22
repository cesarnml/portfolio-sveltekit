<script lang="ts">
	import ReusableButton from '@components/ReusableButton.svelte'
	import { Url } from '@lib/url'
	import type { PageData } from './$types'

	export let data: PageData
	const { posts } = data
</script>

<div class="flex justify-center items-center min-h-screen">
	<ReusableButton />
</div>
<div>
	<ul>
		{#each posts as post (post.slug)}
			<li><a href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
