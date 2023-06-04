<script lang="ts">
	import { page } from '$app/stores'
	import { Url } from '$lib/url'

	$: {
		console.log($page.error)
	}
</script>

<svelte:head>
	<title>Error Page</title>
</svelte:head>

<div class="flex flex-col">
	<h1 class="mb-4">Page Not Found</h1>
	<div class="md:flex md:gap-4">
		<div class="space-y-4 py-4">
			{#if $page.status === 404}
				<h2>We tried to find the page you requested:</h2>
				<div class="bg-neutral-400 p-4 font-bold text-error-300-600-token">{$page.url}</div>
				<p>However, it doesn't exist.</p>
				<p><a href={Url.Home}>Go Home</a></p>
			{:else}
				<h2>Whoops. We weren't expecting that!</h2>
				<p>No worries! We're investigating the issue. 🕵️</p>
			{/if}

			{#if $page.error?.errorId}
				<p>Error ID: {$page.error.errorId}</p>
			{/if}
		</div>
	</div>
</div>
