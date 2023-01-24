<script lang="ts">
	import { fade } from 'svelte/transition'
	import NavLinks from '@components/NavLinks.svelte'
</script>

<div
	transition:fade
	class="bg-slate-900/75 backdrop-blur text-slate-50 fixed z-50 flex flex-col items-center w-full h-full gap-6 py-8 font-medium"
>
	<NavLinks />
</div>
