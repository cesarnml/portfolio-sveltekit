<script lang="ts">
	export const onClick = (e: Event) => {
		alert('we did it.')
	}
</script>

<button class="btn btn-primary" on:click={onClick}>Hello world!</button>
