<script lang="ts">
	import { page } from '$app/stores'

	export let title: string
	export let description: string
	export let image: string

	const siteTitle = "Cesar Mejia's Web Portfolio"
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={$page.url.href} />

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={formattedTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
</svelte:head>
