<script lang="ts">
	import { Url } from '@lib/url'
	import SiteAuthorDetails from './SiteAuthorDetails.svelte'
</script>

<a class="flex items-center justify-center gap-2" href={Url.Home}>
	<div class="w-12 h-12">
		<img class="object-contain w-full h-12" src="/images/avatar.png" alt="avatar" />
	</div>
	<SiteAuthorDetails />
</a>
