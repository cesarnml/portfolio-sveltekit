<script lang="ts">
	import {
		PUBLIC_EMAIL_SECURE_TOKEN,
		PUBLIC_EMAIL_TO,
		PUBLIC_EMAIL_FROM,
		PUBLIC_EMAIL_SUBJECT
	} from '$env/static/public'
	import { error } from '@sveltejs/kit'
	import { onMount } from 'svelte'

	let sendEmail: () => void
	let name: string
	let email: string
	let message: string

	onMount(() => {
		sendEmail = () =>
			Email.send({
				SecureToken: PUBLIC_EMAIL_SECURE_TOKEN,
				To: PUBLIC_EMAIL_TO,
				From: PUBLIC_EMAIL_FROM,
				Subject: PUBLIC_EMAIL_SUBJECT,
				Body: `${name}<br/>${email}<br/>${message}`
			})
				.then((message) => alert(message))
				.catch((err: Error) => error(400, err.message))
	})
</script>

<div class="flex flex-col">
	<input type="text" name="name" bind:value={name} />
	<input type="email" name="email" bind:value={email} />
	<input type="text" name="message" bind:value={message} />

	<button type="button" on:click={sendEmail}>Send Email</button>
	<script src="/js/smtp.js">
	</script>
</div>
