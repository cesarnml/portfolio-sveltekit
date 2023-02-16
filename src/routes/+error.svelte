<script lang="ts">
	import { page } from '$app/stores'
	import notFound from '$lib/assets/json/notFound.json'
	import { Url } from '$lib/url'
	import lottie from 'lottie-web-light'
	import { onMount } from 'svelte'

	let lottieContainer: HTMLDivElement

	onMount(() => {
		lottie.loadAnimation({
			container: lottieContainer,
			animationData: notFound,
		})
	})
</script>

<div class="flex flex-col">
	<h2 class="mb-4">Page Not Found</h2>
	<div class="md:flex md:gap-4">
		<div class="aspect-[1/1] w-1/3 md:w-1/4">
			<div bind:this={lottieContainer} />
		</div>
		<div class="space-y-4 py-4">
			<p>We tried and tried to find the page you requested:</p>
			<div class="bg-neutral-400 p-4 font-bold text-error-300-600-token">{$page.url}</div>
			<p>But it doesn't exist.</p>
			<p>Go back <a href={Url.Home}>home</a></p>
		</div>
	</div>
</div>
