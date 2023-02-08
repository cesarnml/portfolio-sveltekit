<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton'
	import NavBrand from './NavBrand.svelte'
	import NavMenu from './NavMenu.svelte'
</script>

<AppBar>
	<svelte:fragment slot="lead"><NavBrand /></svelte:fragment>
	<svelte:fragment slot="trail"><NavMenu /></svelte:fragment>
</AppBar>
