<script lang="ts">
	import { onMount } from 'svelte'
	import { storeLightSwitch } from '@skeletonlabs/skeleton'

	// Translate the user's dark mode preference to a theme
	const siteTheme = $storeLightSwitch ? 'github-dark' : 'github-light'

	// An object with all the utterances options I want
	const options = {
		src: 'https://utteranc.es/client.js',
		repo: 'cesarnml/svelte-kit-tutorial',
		label: 'comments',
		crossorigin: 'anonymous',
		theme: siteTheme,
		async: '',
		'issue-term': 'pathname'
	}

	onMount(() => {
		const utteranceScript = document.createElement('script')
		const targetTag = document.getElementById('utterances-comments')

		// Loop over the options & apply each property as an attribute
		for (const prop in options) {
			utteranceScript.setAttribute(prop, options[prop as keyof typeof options])
		}

		targetTag!.appendChild(utteranceScript)
	})
</script>

<div id="utterances-comments" />
