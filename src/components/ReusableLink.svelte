<script lang="ts">
	import { page } from '$app/stores'
	import { storeLightSwitch } from '@skeletonlabs/skeleton'

	export let href = '/'
	export let label = 'No label'

	$: setActiveClass = (href: string) => (href === $page.url.pathname ? 'text-secondary-500 dark:text-primary-400' : '')
</script>

<!-- <a {href} class={clsx(`hover:text-yellow-500 transition-colors`, isActive && 'text-yellow-300')}>{label}</a> -->
<a
	{href}
	class={`${setActiveClass(href)} hover:!bg-transparent ${
		$storeLightSwitch ? 'hover:!text-primary-400' : 'hover:!text-secondary-800'
	}`}>{label}</a
>
