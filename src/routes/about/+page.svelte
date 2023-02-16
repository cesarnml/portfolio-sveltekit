<script lang="ts">
	import { page } from '$app/stores'
	import AboutMe from '$lib/components/AboutMe.svelte'
	import Skills from '$lib/components/Skills.svelte'
	import { skills } from '$lib/config'
</script>

<svelte:head>
	<title>About Cesar</title>
	<meta name="description" content="A bit of basic info about Cesar." />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<h2 class="mb-4">About</h2>
<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	<AboutMe />
	<Skills {skills} />
</div>
