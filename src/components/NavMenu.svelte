<script lang="ts">
	import { media } from '@stores/media'
	import NavLinksContainer from '@components/NavLinksContainer.svelte'
	import NavHamburgerMenu from './NavHamburgerMenu.svelte'
</script>

{#if $media.sm}
	<NavLinksContainer />
{:else}
	<NavHamburgerMenu />
{/if}
