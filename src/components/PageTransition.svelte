<script lang="ts">
	import { page } from '$app/stores'
	import { fade } from 'svelte/transition'
</script>

{#key $page.url.pathname}
	<div in:fade={{ delay: 100, duration: 300 }}>
		<slot />
	</div>
{/key}
