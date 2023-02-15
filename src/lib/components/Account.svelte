<script lang="ts">
	import { supabase } from '$lib/supabaseClient'
	import type { AuthSession } from '@supabase/supabase-js'
	import { error } from '@sveltejs/kit'

	export let session: AuthSession

	let loading = false

	async function signOut() {
		try {
			loading = true
			const { error } = await supabase.auth.signOut()
			if (error) throw error
		} catch (err) {
			error(400, 'Log out failed')
		} finally {
			loading = false
		}
	}
</script>

<div>{JSON.stringify(session, null, 2)}</div>
<button class="btn variant-filled-primary" on:click={signOut} disabled={loading}> Sign Out </button>
