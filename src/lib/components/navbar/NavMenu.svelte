<script lang="ts">
	// import { media } from '$lib/stores/media'
	import NavLinksContainer from '$lib/components/navbar/NavLinksContainer.svelte'
	// import NavHamburgerMenu from './NavHamburgerMenu.svelte'
	// import { getDrawerStore } from '@skeletonlabs/skeleton'
	import DarkModeToggle from './DarkModeToggle.svelte'

	// const drawerStore = getDrawerStore()
</script>

<!-- {#if $media.sm} -->
<NavLinksContainer />
<DarkModeToggle />
<!-- {:else if !$drawerStore.open}
	<NavHamburgerMenu />
{/if} -->
