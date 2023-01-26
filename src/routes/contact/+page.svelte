<script lang="ts">
	import {
		PUBLIC_EMAIL_SECURE_TOKEN,
		PUBLIC_EMAIL_TO,
		PUBLIC_EMAIL_FROM,
		PUBLIC_EMAIL_SUBJECT
	} from '$env/static/public'
	import { error } from '@sveltejs/kit'
	import { onMount } from 'svelte'
	import party from 'party-js'

	let sendEmail: (e: Event) => void
	let name: string
	let email: string
	let message: string
	let buttonText = 'Send Message'
	let buttonDisabled = false

	onMount(() => {
		sendEmail = (e: Event) => {
			buttonDisabled = true
			buttonText = 'Sending ...'
			return Email.send({
				SecureToken: PUBLIC_EMAIL_SECURE_TOKEN,
				To: PUBLIC_EMAIL_TO,
				From: PUBLIC_EMAIL_FROM,
				Subject: PUBLIC_EMAIL_SUBJECT,
				Body: `${name}<br/>${email}<br/>${message}`
			})
				.then(() => {
					if (e.target) {
						party.confetti(e.target as HTMLButtonElement, {
							count: party.variation.range(80, 100),
							size: party.variation.range(0.6, 1.4)
						})
					}
					buttonText = 'Message Sent 🎉'
					setTimeout(() => {
						buttonDisabled = false
						buttonText = 'Send Message'
					}, 4000)
				})
				.catch((err: Error) => error(400, err.message))
		}
	})
</script>

<div class="flex justify-center w-full px-4">
	<!-- <input type="text" name="name" bind:value={name} />
	<input type="email" name="email" bind:value={email} />
	<input type="text" name="message" bind:value={message} />

	<button type="button" on:click={sendEmail}>Send Email</button> -->

	<div class="2xs:max-w-screen-2xs w-full p-6 bg-white rounded-lg shadow-lg">
		<h1 class="mb-4 text-2xl font-bold text-center text-blue-900 select-none">Contact Me</h1>
		<form on:submit|preventDefault={sendEmail}>
			<div class="mb-6">
				<input
					class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="text"
					name="name"
					required
					bind:value={name}
					placeholder="Enter your name"
				/>
			</div>
			<div class="mb-6">
				<input
					class="block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="email"
					name="email"
					required
					bind:value={email}
					placeholder="Enter your email"
				/>
			</div>
			<div class="mb-6">
				<textarea
					class="w-full px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded transition ease-in-out  focus:text-gray-700  focus:border-blue-600 focus:outline-none"
					name="message"
					bind:value={message}
					rows="4"
					required
					placeholder="Write your message..."
				/>
			</div>
			<button
				type="submit"
				disabled={buttonDisabled}
				class="w-full py-3.5 bg-blue-700 text-white font-semibold tracking-wider rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-900 active:shadow-lg transition duration-300 ease-in-out disabled:bg-transparent disabled:text-blue-700 disabled:border disabled:border-blue-700 select-none"
			>
				{buttonText}
			</button>
		</form>
	</div>

	<script src="/js/smtp.js">
	</script>
</div>
