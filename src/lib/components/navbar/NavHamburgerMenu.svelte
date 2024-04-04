<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton'

	const drawerStore = getDrawerStore()
</script>

<button aria-label="nav menu">
	{#if $drawerStore.open}
		<iconify-icon
			on:click={drawerStore.close}
			on:keypress={drawerStore.close}
			class="flex text-3xl"
			icon="material-symbols:close-rounded"
			alt="close drawer"
			role="button"
			tabindex="0"
		/>
	{:else}
		<iconify-icon
			on:click={drawerStore.open}
			on:keypress={drawerStore.open}
			class="flex text-3xl"
			icon="material-symbols:menu-rounded"
			alt="open drawer"
			role="button"
			tabindex="0"
		/>
	{/if}
</button>
