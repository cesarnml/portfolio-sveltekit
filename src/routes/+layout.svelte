<script lang="ts">
	import Navbar from '@components/Navbar.svelte'
	import { media } from '@stores/media'
	import { sidebar } from '@stores/sidebar'
	import '@styles/app.css'
	import { fade } from 'svelte/transition'
	import Sidebar from '@components/Sidebar.svelte'
	// Reactively close sidebar if screen > media.sm and sidebar is open
	$: if ($media.sm && $sidebar) {
		sidebar.close()
	}
</script>

<div class="bg-slate-800 text-slate-300 min-h-screen">
	<Navbar />
	{#if $sidebar}
		<Sidebar />
	{/if}
	<slot />
</div>
