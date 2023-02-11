<script lang="ts">
	import { Url } from '$lib/url'
	import Picture from './Picture.svelte'
	import SiteAuthorDetails from './SiteAuthorDetails.svelte'
</script>

<a class="flex items-center justify-center gap-2" href={Url.Home}>
	<div class="h-12 w-12">
		<Picture
			class="h-12 w-full object-contain"
			src="/src/lib/assets/picture/avatar.png"
			alt="avatar"
			loading="eager"
			decoding="sync"
		/>
	</div>
	<SiteAuthorDetails />
</a>
