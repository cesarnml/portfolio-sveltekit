<script lang="ts">
	export const onClick = () => {
		name = 'You changed me!'
	}
	let name = 'Hello world!'
</script>

<button class="btn btn-primary" on:click={onClick}>{name}</button>
