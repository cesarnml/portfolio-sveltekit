<script lang="ts">
	import { page } from '$app/stores'
	import Comments from '@components/Comments.svelte'
</script>

<svelte:head><link rel="canonical" href={$page.url.href} /></svelte:head>

<div data-testid="blog-layout-div">
	<slot />
	<hr />
	<Comments />
</div>
