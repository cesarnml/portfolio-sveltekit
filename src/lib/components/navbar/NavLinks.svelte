<script lang="ts">
	import ReusableLink from '$lib/components/ReusableLink.svelte'
	import { Url } from '$lib/url'
	// import { getDrawerStore } from '@skeletonlabs/skeleton'

	export let className = ''
	// const drawerStore = getDrawerStore()
	const excludedUrls = ['BlogDetail']
	const navLinks = Object.keys(Url).filter(
		(url) => !excludedUrls.includes(url),
	) as (keyof typeof Url)[]
</script>

<!-- on:click={drawerStore.close}
on:keypress={drawerStore.close} -->
{#each navLinks as navLink (navLink)}
	<div class={className} role="button" tabindex="0">
		<ReusableLink href={String(Url[navLink])} label={navLink} />
	</div>
{/each}
