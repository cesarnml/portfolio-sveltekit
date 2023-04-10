<script lang="ts">
	// @ts-expect-error Giscus is not a module
	import Giscus from '@giscus/svelte'
	import { PUBLIC_GITHUB_REPO } from '$env/static/public'
	import { modeCurrent } from '@skeletonlabs/skeleton'
	import { afterUpdate } from 'svelte'

	$: theme = $modeCurrent ? 'light' : 'dark'

	afterUpdate(() => {
		const giscus = document.querySelector('#comments')
		if (giscus) {
			giscus.setAttribute('theme', theme)
		}
	})
</script>

<Giscus
	id="comments"
	repo={PUBLIC_GITHUB_REPO}
	repoId="R_kgDOIxi0Qg"
	category="Blog"
	categoryId="DIC_kwDOIxi0Qs4CVqdF"
	mapping="pathname"
	term="Welcome to Cesar's Blog Discussion"
	reactionsEnabled="1"
	emitMetadata="1"
	inputPosition="top"
	theme="dark"
	lang="en"
	loading="lazy"
	label="Comments"
/>
