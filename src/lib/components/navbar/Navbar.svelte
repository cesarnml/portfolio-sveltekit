<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton'
	import NavBrand from './NavBrand.svelte'
	import NavMenu from './NavMenu.svelte'
</script>

<AppBar class="!py-2 shadow-lg">
	<svelte:fragment slot="lead"><NavBrand /></svelte:fragment>
	<svelte:fragment slot="trail"><NavMenu /></svelte:fragment>
</AppBar>
