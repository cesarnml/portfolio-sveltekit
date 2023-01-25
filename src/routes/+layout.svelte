<script lang="ts">
	import Footer from '@components/Footer.svelte'
	import Navbar from '@components/Navbar.svelte'
	import Sidebar from '@components/Sidebar.svelte'
	import { media } from '@stores/media'
	import { sidebar } from '@stores/sidebar'
	import '@styles/app.css'

	// Reactively close sidebar if screen > media.sm and sidebar is open
	$: if ($media.sm && $sidebar) {
		sidebar.close()
	}
</script>

<div class="bg-slate-800 text-slate-300 flex flex-col min-h-screen">
	<Navbar />
	{#if $sidebar}
		<Sidebar />
	{/if}
	<div class="lg:w-5xl flex flex-col flex-grow min-h-full py-4 mx-auto">
		<slot />
	</div>
	<Footer />
</div>
