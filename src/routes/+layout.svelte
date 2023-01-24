<script lang="ts">
	import Navbar from '@components/Navbar.svelte'
	import { media } from '@stores/media'
	import { sidebar } from '@stores/sidebar'
	import '@styles/app.css'
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
	<div class="min-h-full py-4">
		<slot />
	</div>
</div>
