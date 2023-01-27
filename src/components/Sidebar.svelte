<script lang="ts">
	import { fade } from 'svelte/transition'
	import NavLinks from '@components/NavLinks.svelte'
	import NavHamburgerMenu from './NavHamburgerMenu.svelte'
</script>

<!-- <div
	transition:fade
	class="fixed z-50 flex flex-col items-center w-full h-full py-16 font-medium bg-slate-900/75 backdrop-blur text-slate-50 gap-6"
	data-testid="navlink-container"
> -->
<div transition:fade data-testid="navlink-container">
	<!-- <div class="absolute top-4 right-4"> -->
	<div>
		<NavHamburgerMenu />
	</div>
	<NavLinks />
</div>
