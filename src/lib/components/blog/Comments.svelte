<script lang="ts">
	import Giscus from '@giscus/svelte'
	import {
		PUBLIC_GITHUB_CATEGORY,
		PUBLIC_GITHUB_REPO,
		PUBLIC_GITHUB_REPO_ID,
	} from '$env/static/public'
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

<div data-testid="giscus">
	<Giscus
		id="comments"
		repo={`${PUBLIC_GITHUB_REPO.split('/')[0]}/${PUBLIC_GITHUB_REPO.split('/')[1]}`}
		repoId={PUBLIC_GITHUB_REPO_ID}
		category={PUBLIC_GITHUB_CATEGORY}
		categoryId={PUBLIC_GITHUB_REPO_ID}
		mapping="title"
		term="Welcome"
		reactionsEnabled="1"
		inputPosition="top"
		theme="dark"
		lang="en"
		loading="lazy"
	/>
</div>
