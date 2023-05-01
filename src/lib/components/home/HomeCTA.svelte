<script lang="ts">
	import Picture from '$lib/components/Picture.svelte'
	import { Url } from '$lib/url'
</script>

<!-- HOME CTA CARD -->
<div class="flex flex-col gap-4 md:flex-row-reverse md:gap-12">
	<!-- CTA CARD IMAGE -->
	<div class="flex justify-center">
		<div class="w-52 overflow-hidden rounded-full 3xs:w-60 2xs:w-72">
			<Picture src="/src/lib/assets/picture/comic.jpg" alt="avatar" loading="eager" />
		</div>
	</div>
	<!-- CTA CARD CONTENT -->
	<div class="flex flex-col justify-between gap-4">
		<!-- HEADER -->
		<h1>Hello, I'm Cesar 👋</h1>
		<!-- CONTENT -->
		<div class="space-y-4">
			<p class="!text-lg 3xs:!text-xl">
				I'm a developer, blogger and an educator. I like to build awesome, engaging, and accessible
				web apps.
			</p>
			<p class="!text-lg 3xs:!text-xl">Let's learn together!</p>
		</div>
		<!-- BUTTONS -->
		<div class="flex flex-col gap-5 3xs:flex-row">
			<a class="btn btn-lg variant-filled-primary w-full" href={Url.Blog}
				>Blog &nbsp;<iconify-icon
					class="text-2xl"
					icon="material-symbols:arrow-right-alt-rounded"
					alt="right arrow"
				/>
			</a>
			<a class="btn btn-lg variant-ringed-primary w-full" href={Url.About}>About</a>
		</div>
	</div>
</div>
