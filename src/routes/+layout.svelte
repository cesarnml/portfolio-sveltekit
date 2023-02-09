<script lang="ts">
	import Footer from '@components/Footer.svelte'
	import Navbar from '@components/Navbar.svelte'
	import NavHamburgerMenu from '@components/NavHamburgerMenu.svelte'
	import NavLinks from '@components/NavLinks.svelte'
	import PageTransition from '@components/PageTransition.svelte'
	import { AppShell, Drawer, drawerStore, LightSwitch } from '@skeletonlabs/skeleton'
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import { media } from '@stores/media'
	import '@styles/app.css'
	import 'iconify-icon'
	import type { LayoutData } from './$types'

	export let data: LayoutData
	const { pathname } = data
	// Close drawer if screen > media.sm and drawer is currently open
	$: if ($media.sm && $drawerStore.open) {
		drawerStore.close()
	}
	const item = new Object()
</script>

<AppShell>
	<svelte:fragment slot="header"><Navbar /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft" />
	<svelte:fragment slot="sidebarRight" />
	<svelte:fragment slot="pageHeader" />
	<!-- Router Slot -->
	<div class="container relative mx-auto max-w-screen-2md p-4 md:p-8">
		<PageTransition {pathname}>
			<slot />
		</PageTransition>
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<svelte:fragment slot="footer" />
</AppShell>

<Drawer position="top" bgDrawer="backdrop-blur" height="h-screen" duration={250}>
	<div class="flex flex-col items-center gap-2 py-6 px-4">
		<div class="mb-8 flex w-full items-center justify-between ">
			<div class="px-[11px]">
				<LightSwitch class="outline-none" />
			</div>
			<NavHamburgerMenu />
		</div>
		<NavLinks className="text-xl font-semibold list-nav py-6" />
	</div>
</Drawer>
