<script lang="ts">
	import { Avatar, tooltip } from '@skeletonlabs/skeleton'
</script>

<div class="card variant-glass-surface space-y-4 p-6">
	<Avatar src="images/favicon.png" width="w-16 md:20 lg:w-24" />
	<h3>Hey there, I&apos;m Cesar! 👋</h3>
	<p class="!text-lg">
		I am a <strong>full-stack web developer</strong>
		who enjoys building beautiful web apps with a focus on <strong>performance</strong> and
		<strong>accessibility</strong>. I also like to <a href="/blog">blog</a> about my journey as a
		web developer and share my knowledge via <strong>code tutorials</strong>.
	</p>
	<p class="!text-lg">
		In my free time, I enjoy studying <button
			use:tooltip={{
				content: '<div>Learning Thai&nbsp;&nbsp;🇹🇭</div><div>Sawaatdee krap!</div>',
				position: 'top',
				background: 'bg-secondary-100-800-token',
			}}><span class="border-b border-dotted">languages</span></button
		>, improving my
		<button
			use:tooltip={{
				content: '🥊&nbsp;&nbsp;It beats running on the treadmill&nbsp;&nbsp; 🙂',
				position: 'top',
				background: 'bg-secondary-100-800-token',
			}}><span class="border-b border-dotted">Muay Thai</span></button
		>
		skills, and watching the latest
		<button
			use:tooltip={{
				content: '❤️&nbsp;&nbsp;We love Dance of Dragons and The Last of Us&nbsp;&nbsp;🍿',
				position: 'top',
				background: 'bg-secondary-100-800-token',
			}}><span class="border-b border-dotted">Netflix/HBO</span></button
		> series with my partner.
	</p>
	<hr />
	<form method="get" action="pdfs/Resume-CesarMejia.pdf">
		<button class="btn variant-filled-primary w-full">
			<span class="!text-lg">Download Resume</span>
			<iconify-icon class="text-2xl" icon="material-symbols:downloading" />
		</button>
	</form>
</div>
