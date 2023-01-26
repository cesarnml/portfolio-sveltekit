<script lang="ts">
	import { media } from '@stores/media'
	import NavLinksContainer from '@components/NavLinksContainer.svelte'
	import NavHamburgerMenu from './NavHamburgerMenu.svelte'
	import { LightSwitch } from '@skeletonlabs/skeleton'
</script>

{#if $media.sm}
	<NavLinksContainer />
{:else}
	<NavHamburgerMenu />
{/if}
<LightSwitch />
