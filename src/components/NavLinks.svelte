<script lang="ts">
	import { sidebar } from '@stores/sidebar'
	import ReusableLink from '@components/ReusableLink.svelte'
	import { Url } from '@lib/url'

	const excludedUrls = ['BlogDetail']
	const navLinks = Object.keys(Url).filter((url) => !excludedUrls.includes(url)) as (keyof typeof Url)[]
</script>

{#each navLinks as navLink (navLink)}
	<div on:click={sidebar.close} on:keypress={sidebar.close}>
		<ReusableLink href={String(Url[navLink])} label={navLink} />
	</div>
{/each}
