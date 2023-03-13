<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'
</script>

<div class="card variant-glass-surface space-y-4 p-6">
	<Avatar src="favicon.ico" width="w-16 md:20 lg:w-24" />
	<h3>Hello, I'm Cesar! 👋</h3>
	<p class="!text-lg">
		I am a full-stack web developer who specializes in building high-performance, accessible web
		applications. When I'm not coding, you can find me writing insightful articles on my blog about
		my experiences in web development, as well as creating code tutorials to share my knowledge.
	</p>
	<p class="!text-lg">
		In my free time, I enjoy studying <button
			><span class="border-b border-dotted">languages</span></button
		>, improving my
		<button><span class="border-b border-dotted">Muay Thai</span></button>
		skills, and watching the latest
		<button><span class="border-b border-dotted">Netflix/HBO</span></button> series with my partner.
	</p>
	<hr />
	<form method="get" action="pdfs/Resume-CesarMejia.pdf">
		<button class="btn variant-filled-primary w-full">
			<span class="!text-lg">Download Resume</span>
			<iconify-icon class="text-2xl" icon="material-symbols:downloading" />
		</button>
	</form>
</div>
