<script lang="ts">
	import { media } from '@stores/media'
	import { fade } from 'svelte/transition'

	export let author = 'Cesar Mejia'
	export let profession = 'Web Dev'
</script>

<div class="font-medium">
	{author}
	{#if $media.md}
		<span transition:fade>&nbsp;&nbsp;|&nbsp;&nbsp;{profession} </span>
	{/if}
</div>
