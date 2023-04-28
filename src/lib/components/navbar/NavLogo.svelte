<script lang="ts">
	import { Url } from '$lib/url'
	import Picture from '../Picture.svelte'
</script>

<a class="flex items-center justify-center gap-2" href={Url.Home}>
	<div class="h-10 w-10">
		<Picture
			class="object-cover transition hover:scale-110"
			src="/src/lib/assets/picture/logo.png"
			alt="logo"
			loading="eager"
		/>
	</div>
</a>
