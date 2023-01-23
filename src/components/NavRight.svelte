<script lang="ts">
	import { Url } from '@lib/url'
	import ReusableLink from './ReusableLink.svelte'

	const navLinks = Object.keys(Url) as (keyof typeof Url)[]
</script>

<ul class="flex items-center gap-8 list-none">
	{#each navLinks as navLink (navLink)}
		<li>
			<ReusableLink href={String(Url[navLink])} label={navLink} />
		</li>
	{/each}
</ul>
