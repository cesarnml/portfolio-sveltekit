<script lang="ts">
	import { fade } from 'svelte/transition'

	export let pathname: string
	const duration = 150 // in ms
</script>

{#key pathname}
	<!-- <div in:blur={{ duration }}> -->
	<div in:fade={{ delay: duration }} out:fade={{ duration }}>
		<slot />
	</div>
{/key}
