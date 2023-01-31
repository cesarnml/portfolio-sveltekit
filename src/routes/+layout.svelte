<script lang="ts">
	import Footer from '@components/Footer.svelte'
	import Navbar from '@components/Navbar.svelte'
	import { media } from '@stores/media'
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
	import { Drawer, drawerStore, LightSwitch, AppShell } from '@skeletonlabs/skeleton'
	import NavLinks from '@components/NavLinks.svelte'
	import NavHamburgerMenu from '@components/NavHamburgerMenu.svelte'

	// Close drawer if screen > media.sm and drawer is currently open
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
	<div class="md:p-8 max-w-screen-2md container relative p-4 mx-auto">
		<Drawer position="top" bgDrawer="backdrop-blur" height="h-screen" duration={250}>
			<div class="flex flex-col items-center gap-3 p-4">
				<div class="flex items-center justify-between w-full">
					<div class="px-[11px]">
						<LightSwitch class="outline-none" />
					</div>
					<NavHamburgerMenu />
				</div>
				<NavLinks className="text-xl font-semibold list-nav" />
			</div>
		</Drawer>
		<slot />
	</div>
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
	<svelte:fragment slot="footer" />
</AppShell>
