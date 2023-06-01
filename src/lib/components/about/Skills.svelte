<script lang="ts">
	export let skills: string[] = []
</script>

<div class="text:sm 3xs:text-md card variant-glass-secondary p-6">
	<h2 class="mb-6 border-b pb-6 text-xl">Skills/Tools</h2>
	<ul class="grid list-inside list-disc grid-cols-2 gap-1 3xs:gap-2">
		{#each skills as skill (skill)}
			<li>{skill}</li>
		{/each}
	</ul>
</div>
