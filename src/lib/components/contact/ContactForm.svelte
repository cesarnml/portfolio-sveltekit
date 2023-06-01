<script lang="ts">
	import {
		PUBLIC_EMAIL_SECURE_TOKEN,
		PUBLIC_EMAIL_TO,
		PUBLIC_EMAIL_FROM,
		PUBLIC_EMAIL_SUBJECT,
	} from '$env/static/public'
	import { error, type HttpError } from '@sveltejs/kit'
	import party from 'party-js'
	import { ProgressRadial, type ToastSettings } from '@skeletonlabs/skeleton'
	import { toastStore } from '@skeletonlabs/skeleton'
	import { Email } from '$lib/external/smtp'
	import { browser } from '$app/environment'

	const rows = 5
	let sendEmail: (e: Event) => Promise<void | HttpError>
	let name: string
	let email: string
	let message: string
	let buttonDisabled = false
	let showProgress = false
	let partyRef: HTMLDivElement

	function resetForm() {
		name = ''
		email = ''
		message = ''
		buttonDisabled = false
		showProgress = false
	}

	function triggerToast(): void {
		const t: ToastSettings = {
			message: 'Message delivered 🎉',
			autohide: true,
			timeout: 2000,
		}
		toastStore.trigger(t)
	}

	if (browser) {
		sendEmail = async () => {
			showProgress = true
			buttonDisabled = true
			try {
				await Email.send({
					SecureToken: PUBLIC_EMAIL_SECURE_TOKEN,
					To: PUBLIC_EMAIL_TO,
					From: PUBLIC_EMAIL_FROM,
					Subject: PUBLIC_EMAIL_SUBJECT,
					Body: `${name}<br/>${email}<br/>${message}`,
				})

				party.confetti(partyRef, {
					count: party.variation.range(90, 100),
					size: party.variation.range(0.8, 1.4),
				})
				resetForm()
				triggerToast()
			} catch (err) {
				error(400, 'Email failed 😬')
			}
		}
	}
</script>

<div>
	<div class="flex flex-col items-center">
		<div class="w-full max-w-screen-xs">
			<h1 class="mb-8 text-2xl">Contact Me</h1>
			<form class="flex flex-col items-stretch gap-6" on:submit|preventDefault={sendEmail}>
				<p class="!text-lg">
					You can contact me via this contact form or through my <a
						class="text-primary-400-500-token"
						href="mailto:cmejia@gmail.com">personal email</a
					> and I will get back to you as soon as I can.
				</p>
				<label class="input-label" for="name">
					<div class="mb-2 font-semibold">Your name</div>
					<input
						class="input italic"
						id="name"
						type="text"
						name="name"
						required
						bind:value={name}
						placeholder="What should I call you?"
					/>
				</label>
				<label class="input-label" for="email">
					<div class="mb-2 font-semibold">Your email or phone number</div>
					<input
						class="input italic"
						id="email"
						type="email"
						name="email"
						required
						bind:value={email}
						placeholder="Where can I send my response?"
					/>
				</label>
				<label class="input-label" for="message">
					<div class="mb-2 font-semibold">What's on your mind?</div>
					<textarea
						class="textarea italic"
						id="message"
						name="message"
						bind:value={message}
						{rows}
						required
						placeholder="What would you like to talk about?"
					/>
				</label>
				<button
					class="btn-lg btn variant-filled-primary w-full"
					type="submit"
					disabled={buttonDisabled}
				>
					<div bind:this={partyRef}>Send</div>
					{#if showProgress}
						<div class="w-5">
							<ProgressRadial stroke={300} track="stroke-tertiary-400" width="w-" />
						</div>
					{/if}
				</button>
			</form>
		</div>
	</div>
</div>
