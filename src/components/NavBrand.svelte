<script lang="ts">
	import { Url } from '@lib/url'
	import Picture from './Picture.svelte'
	import SiteAuthorDetails from './SiteAuthorDetails.svelte'
</script>

<a class="flex items-center justify-center gap-2" href={Url.Home}>
	<div class="w-12 h-12">
		<Picture class="object-contain w-full h-12" src="/src/lib/assets/picture/avatar.png" alt="avatar" />
	</div>
	<SiteAuthorDetails />
</a>
