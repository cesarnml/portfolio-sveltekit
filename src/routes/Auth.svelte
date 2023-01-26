<script lang="ts">
	import { supabase } from '$lib/supabaseClient'

	let loading = false
	let email: string

	const handleLogin = async () => {
		try {
			loading = true
			const { error } = await supabase.auth.signInWithOtp({ email })
			if (error) throw error
			alert('Check your email for the login link!')
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message)
			}
		} finally {
			loading = false
		}
	}
</script>

<form class="" on:submit|preventDefault={handleLogin}>
	<div class="">
		<h1 class="">Welcome to my website! Let's learn to be better together.</h1>
		<p class="">Sign in via magic link with your email below</p>
		<div>
			<input class="" type="email" placeholder="Your email" bind:value={email} />
		</div>
		<div>
			<input type="submit" class="button block" value={loading ? 'Loading' : 'Send magic link'} disabled={loading} />
		</div>
	</div>
</form>
