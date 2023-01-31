<script lang="ts">
	import { page } from '$app/stores'
	import Comments from '@components/Comments.svelte'
</script>

<svelte:head><link rel="canonical" href={$page.url.href} /></svelte:head>

<div data-testid="blog-layout-div">
	<slot />
	<hr />
	<a
		target="_blank"
		rel="noreferrer noopener"
		href={`https://github.com/cesarnml/svelte-kit-tutorial/edit/main/src/content${$page.url.pathname}/index.md`}
		>Edit on GitHub</a
	>
	<Comments />
</div>
