<script lang="ts">
	export let title: string
	export let description: string
	const siteTitle = "Cesar Mejia's Web Portfolio"
	const formattedTitle = title ? `${title} | ${siteTitle}` : siteTitle
</script>

<svelte:head>
	<title>{formattedTitle}</title>
	<meta name="description" content={description} />
	<meta httpequiv="Content-Security-Policy" content="script-src 'self'" />

	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:title" content={formattedTitle} />
	<meta property="og:description" content={description} />
</svelte:head>
