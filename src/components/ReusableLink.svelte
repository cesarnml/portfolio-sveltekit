<script lang="ts">
		import { page } from '$app/stores'
		import clsx from 'clsx'

		export let href = '/'
		export let label = 'No label'

		$: isActive = $page.url.pathname === href 
</script>

<a {href} class={clsx(`hover:text-yellow-500 transition-colors`, isActive && 'text-yellow-300')  }>{label}</a>
