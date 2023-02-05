<script lang="ts">
	import { afterUpdate, onMount } from 'svelte'
	import { storeLightSwitch } from '@skeletonlabs/skeleton'

	$: theme = $storeLightSwitch ? 'github-dark' : 'github-light'

	$: options = {
		src: 'https://utteranc.es/client.js',
		repo: 'cesarnml/svelte-kit-tutorial',
		label: 'comments',
		crossorigin: 'anonymous',
		theme,
		async: '',
		'issue-term': 'pathname',
	}

	const postMessage = (theme: string) => {
		const iframe = document.querySelector('.utterances-frame') as HTMLIFrameElement
		if (!iframe) {
			setTimeout(() => postMessage(theme), 500)
		} else {
			if (iframe.contentWindow) {
				try {
					iframe.contentWindow.postMessage({ type: 'set-theme', theme }, 'https://utteranc.es')
				} catch (error) {
					console.log('error')
					console.log(error)
				}
			}
		}
	}

	onMount(() => {
		const utteranceScript = document.createElement('script')
		const targetTag = document.getElementById('utterances-comments')

		// Loop over the options & apply each property as an attribute
		for (const prop in options) {
			utteranceScript.setAttribute(prop, options[prop as keyof typeof options])
		}
		if (targetTag) {
			targetTag.appendChild(utteranceScript)
		}
	})

	afterUpdate(() => {
		postMessage(theme)
	})
</script>

<div id="utterances-comments" />

<!-- ref: https://svelte-utterances.vercel.app/dynamic  -->
<!-- ref: https://joshcollinsworth.com/blog/add-blog-comments-static-site -->
