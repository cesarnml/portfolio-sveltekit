<script lang="ts">
	export let skills: string[] = []
</script>

<div class="card variant-glass-secondary p-6">
	<h3 class="mb-6 border-b pb-6">Skills/Tools</h3>
	<ul class="grid list-inside list-disc grid-cols-2 gap-2">
		{#each skills as skill (skill)}
			<li>{skill}</li>
		{/each}
	</ul>
</div>
