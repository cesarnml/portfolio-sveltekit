<script lang="ts">
	import { supabase } from '$lib/supabaseClient'
	import type { Provider } from '@supabase/supabase-js'
	import { error } from '@sveltejs/kit'

	let loading = false

	const handleLogin = async (provider: Provider) => {
		try {
			loading = true
			await supabase.auth.signInWithOAuth({
				provider,
			})
		} catch (err) {
			if (err instanceof Error) {
				error(401, 'Authentication failed')
			}
		} finally {
			loading = false
		}
	}
</script>

<h1>Supabase + SvelteKit + Social OAuth</h1>
<form class="flex justify-center" on:submit|preventDefault={() => handleLogin('github')}>
	<button class="btn variant-filled-primary" disabled={loading}>Login with GitHub</button>
</form>

<form class="flex justify-center" on:submit|preventDefault={() => handleLogin('google')}>
	<button class="btn variant-filled-secondary" disabled={loading}>Login with Google</button>
</form>
