<script lang="ts">
	import { onMount } from 'svelte'
	import { invalidate } from '$app/navigation'
	import Footer from '$lib/components/footer/Footer.svelte'
	import Navbar from '$lib/components/navbar/Navbar.svelte'
	import NavHamburgerMenu from '$lib/components/navbar/NavHamburgerMenu.svelte'
	import NavLinks from '$lib/components/navbar/NavLinks.svelte'
	import PageTransition from '$lib/components/PageTransition.svelte'
	import GoogleAnalytics from '$lib/components/GoogleAnalytics.svelte'
	import { AppShell, Drawer, drawerStore, Toast, storePopup } from '@skeletonlabs/skeleton'
	import { media } from '$lib/stores/media'
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	import { partytownSnippet } from '@builder.io/partytown/integration'
	import DarkModeToggle from '$lib/components/navbar/DarkModeToggle.svelte'
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom'
	// import WavesSvg from '$lib/components/WavesSvg.svelte'
	// import { page } from '$app/stores'
	// import { Url } from '$lib/url'
	import 'iconify-icon'

	import '$lib/styles/theme-modern.css'
	import '@skeletonlabs/skeleton/styles/skeleton.css'
	import '../app.postcss'

	export let data

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow })

	$: ({ supabase, pathname } = data)

	inject({ mode: dev ? 'development' : 'production' })

	let scriptEle: HTMLScriptElement

	onMount(() => {
		// Initiate partytown script
		if (scriptEle) {
			scriptEle.textContent = partytownSnippet()
		}
		// Supabase Auth Setup
		const { data } = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => data.subscription.unsubscribe()
	})

	// Close drawer if screen > media.sm and drawer is currently open
	$: if ($media.sm && $drawerStore.open) {
		drawerStore.close()
	}
</script>

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push'],
			resolveUrl: (url) => {
				const siteUrl = 'https://cesarmejia.com/proxytown'

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

	<script bind:this={scriptEle}></script>
	<GoogleAnalytics />
</svelte:head>

<AppShell>
	<svelte:fragment slot="header"><Navbar /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft" />
	<svelte:fragment slot="sidebarRight" />
	<svelte:fragment slot="pageHeader" />

	<!-- TODO: Incorporate waves -->
	<!-- {#if $page.url.pathname === Url.Home}
		<WavesSvg />
	{/if} -->
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
	<div class="flex flex-col items-center gap-2 px-4 py-6">
		<div class="mb-8 flex w-full items-center justify-between">
			<div class="px-[11px]">
				<DarkModeToggle />
			</div>
			<NavHamburgerMenu />
		</div>
		<NavLinks className="text-xl font-semibold list-nav py-6" />
	</div>
</Drawer>

<Toast position="br" />
