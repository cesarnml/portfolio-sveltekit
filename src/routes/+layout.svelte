<script lang="ts">
	// import { supabase } from '$lib/supabaseClient'
	// import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'
	import Footer from '@components/Footer.svelte'
	import Navbar from '@components/Navbar.svelte'
	// import Sidebar from '@components/Sidebar.svelte'
	import { media } from '@stores/media'
	import { sidebar } from '@stores/sidebar'
	// import '@skeletonlabs/skeleton/themes/theme-modern.css'
	// import '@skeletonlabs/skeleton/styles/all.css'
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
	import type { DrawerSettings } from '@skeletonlabs/skeleton'
	import { Drawer, drawerStore, LightSwitch, AppShell } from '@skeletonlabs/skeleton'
	import NavLinks from '@components/NavLinks.svelte'
	import NavHamburgerMenu from '@components/NavHamburgerMenu.svelte'
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
	$: if ($media.sm && $drawerStore.open) {
		drawerStore.close()
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
		<Drawer position="top" bgDrawer="backdrop-blur bg-surface-backdrop-token" height="h-screen" duration={250}>
			<div class="flex flex-col items-center gap-3 p-4">
				<div class="flex items-center justify-between w-full">
					<div class="px-[11px]">
						<LightSwitch />
					</div>
					<NavHamburgerMenu />
				</div>
				<NavLinks className="list-nav text-xl font-semibold" />
			</div>
		</Drawer>
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
