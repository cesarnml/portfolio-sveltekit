<script lang="ts">
	// import { supabase } from '$lib/supabaseClient'
	// import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import Footer from '@components/Footer.svelte'
	import Navbar from '@components/Navbar.svelte'
	// import Sidebar from '@components/Sidebar.svelte'
	import { media } from '@stores/media'
	import { sidebar } from '@stores/sidebar'
	import '@skeletonlabs/skeleton/themes/theme-modern.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '@styles/app.css'
	import { AppShell } from '@skeletonlabs/skeleton'

	onMount(() => {
		// const {
		// 	data: { subscription }
		// } = supabase.auth.onAuthStateChange(() => {
		// 	invalidate('supabase:auth')
		// })
		// return () => {
		// 	subscription.unsubscribe()
		// }
	})

	// Reactively close sidebar if screen > media.sm and sidebar is open
	$: if ($media.sm && $sidebar) {
		sidebar.close()
	}
</script>

<AppShell>
	<svelte:fragment slot="header"><Navbar /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft" />
	<svelte:fragment slot="sidebarRight" />
	<svelte:fragment slot="pageHeader" />
	<!-- Router Slot -->
	<div
		class="dark:prose-invert md:p-8 prose-a:no-underline hover:prose-a:text-secondary-800 dark:hover:prose-a:text-primary-500 prose-headings:mt-0 container relative max-w-screen-md p-4 mx-auto prose"
	>
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
