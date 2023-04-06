<script lang="ts">
	import { Url } from '$lib/url'
	import Picture from './Picture.svelte'
</script>

<a class="flex items-center justify-center gap-2" href={Url.Home}>
	<div class="aspect-[5/3] w-20">
		<Picture src="/src/lib/assets/picture/brand.svg" alt="brand" loading="eager" decoding="sync" />
	</div>
</a>
