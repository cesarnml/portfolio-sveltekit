<script lang="ts">
	export const onClick = () => {
		name = 'You changed me!'
	}
	let name = 'Hello world!'
</script>

<button class="btn variant-filled-primary btn-base" on:click={onClick}>{name}</button>
