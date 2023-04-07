<script lang="ts">
	import ReusableLink from '$lib/components/ReusableLink.svelte'
	import { Url } from '$lib/url'
	import { drawerStore } from '@skeletonlabs/skeleton'

	export let className = ''
	const excludedUrls = ['BlogDetail']
	const navLinks = Object.keys(Url).filter(
		(url) => !excludedUrls.includes(url),
	) as (keyof typeof Url)[]
</script>

{#each navLinks as navLink (navLink)}
	<div on:click={drawerStore.close} on:keypress={drawerStore.close} class={className}>
		<ReusableLink href={String(Url[navLink])} label={navLink} />
	</div>
{/each}
