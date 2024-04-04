<script lang="ts">
	import { media } from '$lib/stores/media'
	import NavLinksContainer from '$lib/components/navbar/NavLinksContainer.svelte'
	import NavHamburgerMenu from './NavHamburgerMenu.svelte'
	import { getDrawerStore, LightSwitch } from '@skeletonlabs/skeleton'

	const drawerStore = getDrawerStore()
</script>

{#if $media.sm}
	<NavLinksContainer />
	<LightSwitch />
{:else if !$drawerStore.open}
	<NavHamburgerMenu />
{/if}
