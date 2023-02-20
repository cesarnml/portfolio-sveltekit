<script lang="ts">
	const unknownFunction = () => {
		throw new Error('it worked!')
	}
</script>

<button type="button" on:click={unknownFunction}> Throw error </button>
