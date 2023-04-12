<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton'
	import NavLogo from './NavLogo.svelte'
	import NavMenu from './NavMenu.svelte'
</script>

<AppBar class="!py-2 shadow-lg">
	<svelte:fragment slot="lead"><NavLogo /></svelte:fragment>
	<svelte:fragment slot="trail"><NavMenu /></svelte:fragment>
</AppBar>
