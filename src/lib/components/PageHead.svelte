<script lang="ts">
	import { page } from '$app/stores'

	const siteTitle = "Cesar Mejia's Web Portfolio"

	export let title = siteTitle
	export let description: string
	export let image: string
</script>

<svelte:head>
	<title>{title || siteTitle}</title>
	<link rel="canonical" href={$page.url.href} />
	<meta name="description" content={description} />
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={title || siteTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
</svelte:head>
