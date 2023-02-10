<!-- 
  Renders a collection of social icon links
  Display order is controlled by icon order in `hrefToIconMap`
  Link addresses are defined in src/lib/config.js
  Falsy links are not be rendered
 -->
<script lang="ts">
	import { github, linkedIn, stackoverflow, twitter, devTo } from '@lib/config'
	import { keys } from 'lodash'

	/**
	 * Extend map with additional imports/icons if desired
	 * Brand icons can be found at the link below
	 * ref: https://icon-sets.iconify.design/fa6-brands/dev/
	 */
	const hrefToIconMap = {
		[linkedIn]: 'fa6-brands:linkedin',
		[github]: 'fa6-brands:github',
		[devTo]: 'fa6-brands:dev',
		[stackoverflow]: 'fa6-brands:stack-overflow',
		[twitter]: 'fa6-brands:square-twitter',
	}

	/**
	 * The only purpose of this function is to allow for proper type casting
	 * of href within svelte #each block
	 */
	function getIconFromHref(href: string) {
		return hrefToIconMap[href as keyof typeof hrefToIconMap]
	}
</script>

<div class="flex gap-8 text-2xl">
	{#each keys(hrefToIconMap) as href}
		<!-- Render link if truthy. See lib/config.js -->
		{#if Boolean(href)}
			<a {href} target="_blank" rel="noreferrer noopener">
				<iconify-icon icon={getIconFromHref(href)} />
			</a>
		{/if}
	{/each}
</div>
