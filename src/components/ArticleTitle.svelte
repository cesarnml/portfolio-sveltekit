<script lang="ts">
	export let slug = ''
	export let title: string
	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-')
	const href = slug ? `/posts/${slug}` : '#' + id
</script>

<h1 class="mb-3 text-3xl" {id}>
	<a {href}>
		{title}
	</a>
</h1>
