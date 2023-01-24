<script lang="ts">
	import { fade } from 'svelte/transition'
	import NavLinks from '@components/NavLinks.svelte'
	import NavHamburgerMenu from './NavHamburgerMenu.svelte'
</script>

<div
	transition:fade
	class="bg-slate-900/75 backdrop-blur text-slate-50 fixed z-50 flex flex-col items-center w-full h-full gap-6 py-16 font-medium"
	data-testid="navlink-container"
>
	<div class="top-4 right-4 absolute">
		<NavHamburgerMenu />
	</div>
	<NavLinks />
</div>
