<script lang="ts">
	import { page } from '$app/stores'
	import Picture from '$lib/components/Picture.svelte'
</script>

<svelte:head>
	<title>Cesar Mejia's Web Portfolio</title>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center">
	<div class="w-96">
		<Picture
			src="/src/lib/assets/picture/construction.png"
			alt="construction"
			loading="eager"
			decoding="sync"
		/>
	</div>
	<div>Site under construction.</div>
</div>
