<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton'
	import NavBrand from './NavBrand.svelte'
	import NavMenu from './NavMenu.svelte'
</script>

<AppBar class="sticky top-0 z-10 backdrop-blur  dark:!bg-surface-800/90 !bg-surface-100/90">
	<svelte:fragment slot="lead"><NavBrand /></svelte:fragment>
	<svelte:fragment slot="trail"><NavMenu /></svelte:fragment>
</AppBar>
