<script lang="ts">
	import { page } from '$app/stores'
	import constructionAnimation from '$lib/assets/json/construction.json'
	import lottie from 'lottie-web-light'
	import { onMount } from 'svelte'

	let lottieContainer: HTMLDivElement

	onMount(() => {
		lottie.loadAnimation({
			container: lottieContainer,
			animationData: constructionAnimation,
		})
	})
</script>

<svelte:head>
	<title>Cesar's Web Portfolio</title>
	<meta
		name="description"
		content="Explore my web portfolio and tech blog for insights on the latest trends in technology. Discover my creative designs and development skills in the portfolio, while the blog features in-depth analysis and expert tips on various tech topics. Join me on a journey of innovation and inspiration."
	/>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div class="flex h-full w-full flex-col items-center justify-center">
	<!-- <div class="aspect-[4/3] w-5/6">
		<div bind:this={lottieContainer} />
	</div> -->
	<h2><span>🚧</span> site under construction <span>🚧</span></h2>
</div>
