<script lang="ts">
	import { Avatar, popup } from '@skeletonlabs/skeleton'
	import type { PopupSettings } from '@skeletonlabs/skeleton'

	let popupLanguage: PopupSettings = {
		event: 'click',
		target: 'languagePopup',
		placement: 'top',
	}

	let popupMuay: PopupSettings = {
		event: 'click',
		target: 'muayPopup',
		placement: 'top',
	}

	let popupHbo: PopupSettings = {
		event: 'click',
		target: 'hboPopup',
		placement: 'top',
	}
</script>

<div class="card variant-glass-surface space-y-4 p-6">
	<Avatar src="favicon.ico" width="w-16 md:20 lg:w-24" alt="avatar" />
	<h2>Hello, I'm Cesar! 👋</h2>
	<p class="!text-lg">
		I am a full-stack web developer who specializes in building high-performance, engaging, and
		accessible web applications. When I'm not coding, I like write about my experiences in web
		development, as well as creating programming tutorials to share my knowledge.
	</p>
	<p class="!text-lg">
		In my free time, I enjoy studying <button
			><span class="border-b border-dotted" use:popup={popupLanguage}>languages</span>
			<div
				data-popup="languagePopup"
				class="card variant-filled-tertiary rounded px-2 py-1 text-sm"
			>
				Studying Thai 🇹🇭 <br /> Sà-wàt-dii krap!
				<div class="arrow variant-filled-tertiary" />
			</div></button
		>, improving my
		<button
			><span class="border-b border-dotted" use:popup={popupMuay}>Muay Thai</span>
			<div data-popup="muayPopup" class="card variant-filled-tertiary rounded px-2 py-1 text-sm">
				It beats running on a treadmill 🥊
				<div class="arrow variant-filled-tertiary" />
			</div></button
		>
		skills, and watching the latest
		<button
			><span class="border-b border-dotted" use:popup={popupHbo}>Netflix/HBO</span>
			<div data-popup="hboPopup" class="card variant-filled-tertiary rounded px-2 py-1 text-sm">
				🎬 The Last of Us and Westworld are our favorites. 🍿
				<div class="arrow variant-filled-tertiary" />
			</div></button
		> series with my partner.
	</p>
	<hr />
	<form method="get" action="pdfs/Resume-CesarMejia-15May2023.pdf">
		<button class="btn variant-filled-primary w-full">
			<span class="!text-lg">Download Resume</span>
			<iconify-icon class="text-2xl" icon="material-symbols:downloading" alt="download resume" />
		</button>
		<a href="pdfs/Resume-CesarMejia-15May2023.pdf" download style="display: none;" />
	</form>
</div>
