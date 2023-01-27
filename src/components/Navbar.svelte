<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton'
	import NavBrand from './NavBrand.svelte'
	import NavMenu from './NavMenu.svelte'
</script>

<!-- <nav
	class="sticky top-0 z-50 flex items-center justify-between h-16 px-4 shadow-md bg-slate-900/75 backdrop-blur sm:px-6"
> -->
<AppBar>
	<svelte:fragment slot="lead"><NavBrand /></svelte:fragment>
	<svelte:fragment slot="trail"><NavMenu /></svelte:fragment>
</AppBar>
