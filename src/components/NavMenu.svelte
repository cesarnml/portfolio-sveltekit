<script lang="ts">
	import { media } from '@stores/media'
	import NavLinksContainer from '@components/NavLinksContainer.svelte'
	import NavHamburger from './NavHamburger.svelte'
</script>

{#if $media.sm}
	<NavLinksContainer />
{:else}
	<NavHamburger />
{/if}
