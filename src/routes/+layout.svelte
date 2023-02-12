<script lang="ts">
	import type { LayoutData } from './$types'
	import { onMount } from 'svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Navbar from '$lib/components/Navbar.svelte'
	import NavHamburgerMenu from '$lib/components/NavHamburgerMenu.svelte'
	import NavLinks from '$lib/components/NavLinks.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte'
	import { AppShell, Drawer, drawerStore, LightSwitch, Toast } from '@skeletonlabs/skeleton'
	import { media } from '$lib/stores/media'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import { partytownSnippet } from '@builder.io/partytown/integration'

	import 'iconify-icon'
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '$lib/styles/app.css'

	inject({ mode: dev ? 'development' : 'production' })

	let scriptEle: HTMLScriptElement

	onMount(() => {
		if (scriptEle) {
			scriptEle.textContent = partytownSnippet()
		}
	})

	export let data: LayoutData

	const { pathname } = data
	// Close drawer if screen > media.sm and drawer is currently open
	$: if ($media.sm && $drawerStore.open) {
		drawerStore.close()
	}
</script>

<svelte:head>
	<!-- Config options -->
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://cesar-mejia.com/proxytown'

				if (url.hostname === 'www.googletagmanager.com') {
					const proxyUrl = new URL(`${siteUrl}/gtm`)

					const gtmId = new URL(url).searchParams.get('id')
					gtmId && proxyUrl.searchParams.append('id', gtmId)

					return proxyUrl
				} else if (url.hostname === 'www.google-analytics.com') {
					const proxyUrl = new URL(`${siteUrl}/ga`)

					return proxyUrl
				}

				return url
			},
		}
	</script>

	<!-- `partytownSnippet` is inserted here -->
	<script bind:this={scriptEle}></script>
	<GoogleAnalytics />
</svelte:head>

<AppShell>
	<svelte:fragment slot="header"><Navbar /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft" />
	<svelte:fragment slot="sidebarRight" />
	<svelte:fragment slot="pageHeader" />
	<!-- Router Slot -->
	<div class="container relative mx-auto max-w-screen-lg p-4 md:p-6 lg:p-8">
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

<Toast />
