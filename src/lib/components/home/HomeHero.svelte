<script lang="ts">
	import Picture from '$lib/components/Picture.svelte'
	import { Url } from '$lib/url'
</script>

<div class="mt-4 flex h-full w-full flex-col items-center justify-center gap-5">
	<div class="flex flex-col items-center gap-5 md:flex-row-reverse">
		<div class="w-24 md:mx-20 md:w-64">
			<Picture src="/src/lib/assets/picture/avatar.png" alt="avatar" loading="eager" />
		</div>
		<div class="space-y-5">
			<h1 class="mb-4 !text-3xl md:text-left">👋 Hi, I'm Cesar</h1>
			<p class="text-center !text-xl font-semibold 3xs:!text-2xl 2xs:text-left">
				I'm a developer, blogger and an educator. I like to build fun, engaging, and accessible web
				apps.
			</p>
			<div class="py flex w-full flex-col justify-center gap-4 3xs:flex-row">
				<a class="btn variant-filled-primary 2xs:btn-lg" href={Url.Blog}>Read my blog</a>
				<a class="btn variant-ringed-primary 2xs:btn-lg" href={Url.About}>More about me</a>
			</div>
		</div>
	</div>
</div>
