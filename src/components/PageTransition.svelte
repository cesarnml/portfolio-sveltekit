<script lang="ts">
	import { blur } from 'svelte/transition'
	export let pathname: string | undefined
</script>

{#key pathname}
	<div in:blur={{ delay: 150, duration: 300 }} out:blur={{ duration: 150 }}>
		<slot />
	</div>
{/key}
