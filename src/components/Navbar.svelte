<script lang="ts">
	import { Url } from '@lib/url'
	import NavLeft from './NavLeft.svelte'
	import NavRight from './NavRight.svelte'

	const navLinks = Object.keys(Url) as (keyof typeof Url)[]
</script>

<nav
	class="bg-slate-900/75 border-slate-100 text-slate-50 backdrop-blur border-b-1 sticky top-0 z-50 flex items-center justify-between h-16 px-6 font-medium shadow-md"
>
	<NavLeft />
	<NavRight />
</nav>
