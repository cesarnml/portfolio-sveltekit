<script lang="ts">
	import { page } from '$app/stores'
	import { blur } from 'svelte/transition'

	const duration = 350 // in ms
</script>

{#key $page.url.pathname}
	<div in:blur={{ duration }}>
		<slot />
	</div>
{/key}
