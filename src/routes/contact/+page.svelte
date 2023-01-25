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
	$: disableCondition = Boolean(!name || !email || !message)
	onMount(() => {
		buttonDisabled = true
		sendEmail = (e: Event) =>
			Email.send({
				SecureToken: PUBLIC_EMAIL_SECURE_TOKEN,
				To: PUBLIC_EMAIL_TO,
				From: PUBLIC_EMAIL_FROM,
				Subject: PUBLIC_EMAIL_SUBJECT,
				Body: `${name}<br/>${email}<br/>${message}`
			})
				.then(() => {
					if (e.target) {
						party.confetti(e.target as HTMLButtonElement)
					}
					buttonText = 'Message Sent 🎉'
					name = ''
					email = ''
					message = ''
					setTimeout(() => {
						buttonDisabled = false
						buttonText = 'Send Message'
					}, 2000)
				})
				.catch((err: Error) => error(400, err.message))
	})
</script>

<div class="flex justify-center w-full">
	<!-- <input type="text" name="name" bind:value={name} />
	<input type="email" name="email" bind:value={email} />
	<input type="text" name="message" bind:value={message} />

	<button type="button" on:click={sendEmail}>Send Email</button> -->

	<div class="w-1/2 p-6 bg-white rounded-lg shadow-lg">
		<h1 class="mb-4 text-2xl font-bold text-center text-blue-900">Contact Me</h1>
		<form on:submit|preventDefault={sendEmail}>
			<div class="mb-6">
				<input
					class="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="text"
					name="name"
					bind:value={name}
					placeholder="Enter your name"
				/>
			</div>
			<div class="mb-6">
				<input
					class="block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
					type="email"
					name="email"
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
					placeholder="Write your message..."
				/>
			</div>
			<button
				type="submit"
				disabled={buttonDisabled || disableCondition}
				class="w-full py-3.5 bg-blue-700 text-white font-semibold tracking-wider rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-gray-400"
			>
				{buttonText}
			</button>
		</form>
	</div>

	<script src="/js/smtp.js">
	</script>
</div>
