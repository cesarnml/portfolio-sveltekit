<script lang="ts">
	import AboutMe from '@components/AboutMe.svelte'
	import Skills from '@components/Skills.svelte'
	import { skills } from '@lib/config'
</script>

<svelte:head><title>About Me</title></svelte:head>

<h2 class="mb-4">About</h2>
<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	<AboutMe />
	<Skills {skills} />
</div>
