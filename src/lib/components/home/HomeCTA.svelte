<script lang="ts">
	import Picture from '$lib/components/Picture.svelte'
	import { Url } from '$lib/url'
</script>

<!-- HOME CTA CARD -->
<div class="flex flex-col items-center gap-5 md:flex-row-reverse md:items-start">
	<!-- CTA CARD IMAGE -->
	<div class="w-40 overflow-hidden rounded-full md:w-96">
		<Picture src="/src/lib/assets/picture/gordon.png" alt="avatar" loading="eager" />
	</div>
	<!-- CTA CARD CONTENT -->
	<div class="flex max-w-3xl flex-col justify-between gap-4">
		<!-- HEADER -->
		<h1 class="text-center !text-3xl md:text-left md:!text-4xl">👋 Hi, I'm Cesar</h1>
		<!-- CONTENT -->
		<div class="space-y-4">
			<p class="!text-lg font-semibold 3xs:!text-2xl 2xs:text-left">
				I'm a developer, blogger and an educator. I like to build fun, engaging, and accessible web
				apps.
			</p>
			<p class="!text-lg font-semibold 3xs:!text-2xl 2xs:text-left">Let's learn together!</p>
		</div>
		<!-- CTA BUTTONS -->
		<div class="flex flex-col justify-center gap-8 3xs:flex-row">
			<a class="btn btn-lg variant-filled-primary md:w-full" href={Url.Blog}>My Writing</a>
			<a class="btn btn-lg variant-ringed-primary md:w-full" href={Url.About}>About Me</a>
		</div>
	</div>
</div>
