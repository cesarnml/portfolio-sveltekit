<script lang="ts">
	import { page } from '$app/stores'
	import AboutMe from '$lib/components/about/AboutMe.svelte'
	import Skills from '$lib/components/about/Skills.svelte'
	import { skills } from '$lib/config'
</script>

<svelte:head>
	<title>About Cesar</title>
	<meta name="description" content="A bit of basic info about Cesar." />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<h1 class="mb-4 text-2xl">About</h1>
<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	<AboutMe />
	<Skills {skills} />
</div>
