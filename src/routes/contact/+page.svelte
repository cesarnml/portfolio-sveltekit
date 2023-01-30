<script lang="ts">
	import {
		PUBLIC_EMAIL_SECURE_TOKEN,
		PUBLIC_EMAIL_TO,
		PUBLIC_EMAIL_FROM,
		PUBLIC_EMAIL_SUBJECT
	} from '$env/static/public'
	import { error, type HttpError } from '@sveltejs/kit'
	import { onMount } from 'svelte'
	import party from 'party-js'
	import toast, { Toaster } from 'svelte-french-toast'

	const rows = 5
	let sendEmail: (e: Event) => Promise<void | HttpError>
	let name: string
	let email: string
	let message: string
	let buttonText = 'Send Message'
	let buttonDisabled = false

	onMount(async () => {
		sendEmail = async (e: Event) => {
			buttonDisabled = true
			try {
				await Email.send({
					SecureToken: PUBLIC_EMAIL_SECURE_TOKEN,
					To: PUBLIC_EMAIL_TO,
					From: PUBLIC_EMAIL_FROM,
					Subject: PUBLIC_EMAIL_SUBJECT,
					Body: `${name}<br/>${email}<br/>${message}`
				})

				if (e.target) {
					party.confetti(e.target as HTMLButtonElement, {
						count: party.variation.range(80, 100),
						size: party.variation.range(0.6, 1.4)
					})
				}
				setTimeout(() => {
					buttonDisabled = false
				}, 4000)
			} catch (err) {
				error(400, 'Email failed 😬')
			}
		}
	})

	const handleSend = (e: Event) => {
		toast.promise(
			sendEmail(e),
			{
				loading: 'Sending Message',
				success: 'Message sent!',
				error: 'Could not send.'
			},
			{
				className: 'toasty'
			}
		)
	}
</script>

<Toaster />
<div>
	<div class="flex flex-col items-center">
		<h1>Contact Me</h1>
		<form
			class="flex flex-col w-full items-stretch gap-4 max-w-screen-xs"
			on:submit|preventDefault={(e) => handleSend(e)}
		>
			<div>
				<label for="name">Name</label>
				<input id="name" type="text" name="name" required bind:value={name} placeholder="Enter your name" />
			</div>
			<div>
				<label for="email">Email</label>
				<input id="email" type="email" name="email" required bind:value={email} placeholder="Enter your email" />
			</div>
			<div>
				<label for="message">Message</label>
				<textarea id="mesage" name="message" bind:value={message} {rows} required placeholder="Write your message..." />
			</div>
			<button class="tn variant-filled-primary btn-base text-white" type="submit" disabled={buttonDisabled}>
				{buttonText}
			</button>
		</form>
	</div>

	<script src="/js/smtp.js">
	</script>
</div>
