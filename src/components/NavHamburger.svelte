<script lang="ts">
	import { sidebar } from '@stores/sidebar'
	import 'iconify-icon'
</script>

<button class=" hover:text-yellow-500" on:click={sidebar.toggle}>
	{#if $sidebar}
		<iconify-icon class="flex text-3xl" icon="material-symbols:close-rounded" />
	{:else}
		<iconify-icon class="flex text-3xl" icon="material-symbols:menu-rounded" />
	{/if}
</button>
