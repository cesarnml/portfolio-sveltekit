<script lang="ts">
	import { supabase } from '$lib/supabaseClient'
	import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import Footer from '@components/Footer.svelte'
	import Navbar from '@components/Navbar.svelte'
	import Sidebar from '@components/Sidebar.svelte'
	import { media } from '@stores/media'
	import { sidebar } from '@stores/sidebar'
	import '@skeletonlabs/skeleton/themes/theme-modern.css'
	import '@styles/app.css'

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			subscription.unsubscribe()
		}
	})

	// Reactively close sidebar if screen > media.sm and sidebar is open
	$: if ($media.sm && $sidebar) {
		sidebar.close()
	}
</script>

<!-- <div class="bg-slate-800 text-slate-300 flex flex-col min-h-screen"> -->
<div>
	<Navbar />
	{#if $sidebar}
		<Sidebar />
	{/if}
	<!-- <div class="lg:max-w-5xl flex flex-col flex-grow w-full min-h-full py-6 mx-auto"> -->
	<div>
		<slot />
	</div>
	<Footer />
</div>
