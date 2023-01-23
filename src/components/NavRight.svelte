<script lang="ts">
	import { Url } from '@lib/url'
	import ReusableLink from './ReusableLink.svelte'

	const excludedUrls = ['BlogDetail']
	const navLinks = Object.keys(Url).filter((url) => !excludedUrls.includes(url)) as (keyof typeof Url)[]
</script>

<ul class="flex items-center gap-8 list-none">
	{#each navLinks as navLink (navLink)}
		<li>
			<ReusableLink href={String(Url[navLink])} label={navLink} />
		</li>
	{/each}
</ul>
