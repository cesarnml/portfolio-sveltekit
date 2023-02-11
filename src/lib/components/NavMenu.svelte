<script lang="ts">
	import { media } from '$lib/stores/media'
	import NavLinksContainer from '$lib/components/NavLinksContainer.svelte'
	import NavHamburgerMenu from './NavHamburgerMenu.svelte'
	import { LightSwitch, drawerStore } from '@skeletonlabs/skeleton'
</script>

{#if $media.sm}
	<NavLinksContainer />
	<LightSwitch />
{:else if !$drawerStore.open}
	<NavHamburgerMenu />
{/if}
