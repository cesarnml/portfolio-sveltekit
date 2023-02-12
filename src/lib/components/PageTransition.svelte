<script lang="ts">
	import { blur } from 'svelte/transition'

	export let pathname: string | undefined
</script>

{#key pathname}
	<div in:blur={{ delay: 1000, duration: 3000 }} out:blur={{ duration: 1000 }}>
		<slot />
	</div>
{/key}
