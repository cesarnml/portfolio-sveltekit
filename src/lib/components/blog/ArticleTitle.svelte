<script lang="ts">
	export let slug: string
	export let title: string
	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-')
	const href = `/blog/${slug}`
</script>

<h1 {id}>
	<a {href}>
		{title}
	</a>
</h1>
