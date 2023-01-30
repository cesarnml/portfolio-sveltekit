<script lang="ts">
	import Footer from '@components/Footer.svelte'
	import Navbar from '@components/Navbar.svelte'
	import { media } from '@stores/media'
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
	import { Drawer, drawerStore, LightSwitch, AppShell, storeLightSwitch } from '@skeletonlabs/skeleton'
	import NavLinks from '@components/NavLinks.svelte'
	import NavHamburgerMenu from '@components/NavHamburgerMenu.svelte'

	// Close drawer if screen > media.sm and drawer is open
	$: if ($media.sm && $drawerStore.open) {
		drawerStore.close()
	}
</script>

<AppShell>
	<svelte:fragment slot="header" />
	<svelte:fragment slot="sidebarLeft" />
	<svelte:fragment slot="sidebarRight" />
	<svelte:fragment slot="pageHeader"><Navbar /></svelte:fragment>
	<!-- Router Slot -->
	<div class="md:p-8 container relative max-w-screen-md p-4 mx-auto">
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
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<svelte:fragment slot="footer" />
</AppShell>
