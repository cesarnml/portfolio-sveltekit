<script lang="ts">
	import { Url } from '@lib/url'
	import SiteAuthorDetails from './SiteAuthorDetails.svelte'
	import SiteLogo from './SiteLogo.svelte'
</script>

<a
	href={Url.Home}
	class="hover:no-underline hover:text-yellow-300 flex items-center justify-center gap-4 transition-colors"
>
	<SiteLogo src="/avatar.png" alt="avatar" />
	<SiteAuthorDetails />
</a>
