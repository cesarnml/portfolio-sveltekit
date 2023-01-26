<script lang="ts">
	import { page } from '$app/stores'
	import ReusableButton from '@components/ReusableButton.svelte'
	import { supabase } from '@lib/supabaseClient'
	import { Url } from '@lib/url'
	import type { PageData } from './$types'

	export let data: PageData
	const { posts } = data
</script>

<div class="flex items-center justify-center">
	{#if !$page.data.session}
		<button
			on:click={async function signInWithGitHub() {
				const { data, error } = await supabase.auth.signInWithOAuth({
					provider: 'github'
				})
			}}>Sign in with Github</button
		>
		<button
			on:click={async function signInWithGitHub() {
				const { data, error } = await supabase.auth.signInWithOAuth({
					provider: 'google'
				})
			}}>Sign in with Google</button
		>
	{:else}
		<button
			on:click={async function signout() {
				const { error } = await supabase.auth.signOut()
			}}>Sign out</button
		>
	{/if} <button class="btn variant-filled-primary btn-base"> Skeleton </button>
	<ReusableButton />
	<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
		<div class="input-group-shim">(segment)</div>
		<input type="search" placeholder="Search..." />
		<button class="variant-filled-secondary">Submit</button>
	</div>
</div>
<div>
	<ul>
		{#each posts as post (post.slug)}
			<li><a href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>
