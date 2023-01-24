<script lang="ts">
	import { sidebar } from '@stores/sidebar'
	import ReusableLink from '@components/ReusableLink.svelte'
	import { Url } from '@lib/url'

	const excludedUrls = ['BlogDetail']
	const navLinks = Object.keys(Url).filter((url) => !excludedUrls.includes(url)) as (keyof typeof Url)[]
</script>

{#each navLinks as navLink (navLink)}
	<button on:click={sidebar.close}>
		<ReusableLink href={String(Url[navLink])} label={navLink} />
	</button>
{/each}
