<script lang="ts">
	const unknownFunction = () => {
		throw new Error('it worked!')
	}
</script>

<button class="btn variant-filled-primary" type="button" on:click={unknownFunction}>
	Throw error
</button>
