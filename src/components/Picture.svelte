<script context="module">
	const pictures = import.meta.glob('/src/lib/assets/picture/*.{heic,heif,avif,jpg,jpeg,png,tiff,webp,gif}', {
		query: {
			format: 'webp;avif;jpg',
			width: '480;1024;1920',
			picture: '',
			fit: 'cover',
			position: 'center',
		},
		import: 'default',
		eager: true,
	})
</script>

<script lang="ts">
	export let src: string
	export let alt: string

	export let draggable = false

	type Decoding = 'sync' | 'async' | 'auto'

	export let decoding: Decoding = 'async'

	type Loading = 'lazy' | 'eager' | null | undefined
	export let loading: Loading = 'lazy'

	let classes = ''
	export { classes as class }

	type Format = 'webp' | 'avif' | 'jpeg'

	type Image = {
		src: string
		w: number
		h: number
	}

	type Picture = {
		sources: Record<Format, Image[]>
		fallback: Image
	}
	console.log('pictures:', pictures)

	$: picture = pictures[src] as Picture
</script>

<picture>
	{#each Object.entries(picture.sources) as [format, images]}
		<source srcset={images.map((img) => `${img.src} ${img.w}w`).join(', ')} type="image/{format}" />
	{/each}

	<img
		class={classes}
		{decoding}
		{loading}
		{draggable}
		src={picture.fallback.src}
		{alt}
		width={picture.fallback.w}
		height={picture.fallback.h}
	/>
</picture>
