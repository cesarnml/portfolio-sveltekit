<script lang="ts">
	import { storeLightSwitch } from '@skeletonlabs/skeleton'
	import { media } from '$lib/stores/media'
	import { fade } from 'svelte/transition'

	export let author = 'Cesar Mejia'
	export let profession = 'Web Dev'
</script>

<div class={$storeLightSwitch ? 'hover:!text-primary-400' : 'hover:!text-secondary-800'}>
	{author}
	{#if $media.md}
		<span transition:fade>&nbsp;&nbsp;|&nbsp;&nbsp;{profession} </span>
	{/if}
</div>
