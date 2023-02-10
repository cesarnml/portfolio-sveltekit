<script lang="ts">
	import { page } from '$app/stores'
	import SocialBar from '@components/SocialBar.svelte'
</script>

<svelte:head>
	<title>Cesar Mejia's Web Portfolio</title>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<SocialBar />
