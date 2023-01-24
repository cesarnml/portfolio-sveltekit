<script lang="ts">
	import { sidebar } from '@stores/sidebar'
</script>

<button class=" hover:text-yellow-500" on:click={sidebar.toggle}>
	{#if $sidebar}
		<iconify-icon class="flex text-3xl" icon="material-symbols:close-rounded" alt="close-sidebar-icon" />
	{:else}
		<iconify-icon class="flex text-3xl" icon="material-symbols:menu-rounded" alt="open-sidebar-icon" />
	{/if}
</button>
