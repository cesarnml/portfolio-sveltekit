<script lang="ts">
	import { page } from '$app/stores'
	console.log('page:', $page.url)
</script>

<svelte:head><link rel="canonical" href={$page.url.href} /></svelte:head>

<div data-testid="blog-layout-div">
	<slot />
</div>
