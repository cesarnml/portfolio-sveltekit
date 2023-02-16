<script lang="ts">
	import { page } from '$app/stores'
	import { blur } from 'svelte/transition'
</script>

{#key $page.url.pathname}
	<div in:blur={{ duration: 350 }}>
		<slot />
	</div>
{/key}
