<script lang="ts">
	import { Url } from '@lib/url'
	import { sidebar } from '@stores/sidebar'
	import SiteAuthorDetails from './SiteAuthorDetails.svelte'
	import SiteLogo from './SiteLogo.svelte'
</script>

<!-- <a
	class="flex items-center justify-center hover:text-yellow-300 text-slate-50 gap-4 transition-colors"
	href={Url.Home}
	on:click={sidebar.close}
> -->
<a class="flex items-center justify-center gap-2" href={Url.Home} on:click={sidebar.close}>
	<SiteLogo src="/images/avatar.png" alt="avatar" />
	<SiteAuthorDetails />
</a>
