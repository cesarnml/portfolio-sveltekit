<script lang="ts">
	import { media } from '$lib/stores/media'
	import NavLinksContainer from '$lib/components/NavLinksContainer.svelte'
	import NavHamburgerMenu from './NavHamburgerMenu.svelte'
	import { drawerStore } from '@skeletonlabs/skeleton'
	import DarkModeToggle from './DarkModeToggle.svelte'
</script>

{#if $media.sm}
	<NavLinksContainer />
	<DarkModeToggle />
{:else if !$drawerStore.open}
	<NavHamburgerMenu />
{/if}
