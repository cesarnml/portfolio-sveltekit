<script lang="ts">
	import { page } from '$app/stores'

	export let href = '/'
	export let label = 'No label'

	$: setActiveClass = (href: string) => (href === $page.url.pathname ? 'text-primary-500' : '')
</script>

<a {href} class={`${setActiveClass(href)} font-bold hover:!bg-transparent hover:!underline`}
	>{label}</a
>
