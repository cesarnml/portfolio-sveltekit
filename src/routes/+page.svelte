<script lang="ts">
	import { page } from '$app/stores'
</script>

<svelte:head>
	<title>Cesar Mejia's Web Portfolio</title>
	<link rel="canonical" href={$page.url.href} />
	<script
		async
		src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
	></script>
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center">
	<lottie-player
		src="https://assets7.lottiefiles.com/private_files/lf30_y9czxcb9.json"
		background="transparent"
		speed="1"
		style="width: 500px; height: 500px;"
		loop
		autoplay
	/>
	<h2>Site under construction</h2>
</div>
