<script lang="ts">
	import { page } from '$app/stores'
	import Account from '$lib/components/Account.svelte'
	import Auth from '$lib/components/Auth.svelte'
</script>

<svelte:head>
	<title>Cesar's Admin Portal</title>
	<meta name="description" content="Admin portal for Cesar's website" />
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

{#if !$page.data.session}
	<Auth />
{:else}
	<Account session={$page.data.session} />
{/if}
