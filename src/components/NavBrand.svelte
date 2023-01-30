<script lang="ts">
	import { Url } from '@lib/url'
	import { sidebar } from '@stores/sidebar'
	import SiteAuthorDetails from './SiteAuthorDetails.svelte'
	import Img from '@zerodevx/svelte-img'
	import avatarSrc from '$lib/assets/images/avatar.png'
</script>

<a class="flex items-center justify-center gap-2" href={Url.Home} on:click={sidebar.close}>
	<div class="w-12 h-12">
		<Img class="object-contain w-full h-12" src={avatarSrc} alt="avatar" />
	</div>
	<SiteAuthorDetails />
</a>
