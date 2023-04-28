<script lang="ts">
	import { Url } from '$lib/url'
	import Picture from '../Picture.svelte'
</script>

<a class="flex items-center justify-center gap-2" href={Url.Home}>
	<div class="aspect-square">
		<Picture
			class="h-10 w-10 object-cover"
			src="/src/lib/assets/picture/logo.png"
			alt="logo"
			loading="eager"
		/>
	</div>
</a>
