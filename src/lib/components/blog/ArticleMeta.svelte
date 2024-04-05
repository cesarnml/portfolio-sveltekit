<script lang="ts">
	import Picture from '$lib/components/Picture.svelte'

	export let author: string
	export let date: string
	export let readingTime: string
	export let wordCount: number
	export let image: string | undefined = ''
	export let viewCount = 1
</script>

<div class="flex items-center gap-4 mb-4">
	<div class="h-12 w-12 md:h-14 md:w-14">
		<Picture
			class="m-0"
			src="/src/lib/assets/picture/favicon.png"
			alt="avatar"
			loading="eager"
			decoding="sync"
		/>
	</div>
	<div class="flex flex-col">
		<div class="space-x-1">
			<span class="text-lg font-semibold">{author}</span>
			<span>&middot;</span>
			<span>{date}</span>
		</div>
		<div class="flex items-center space-x-2">
			<div class="flex items-center gap-2">
				<iconify-icon
					icon="material-symbols:menu-book-outline"
					alt="book-outline"
					class="text-lg"
				/>
				<span>{readingTime}</span>
			</div>
			<span>&middot;</span>
			<span>{wordCount} {`word${wordCount === 1 ? '' : 's'}`}</span>
			<span>&middot;</span>
			<span>{viewCount} {`view${viewCount === 1 ? '' : 's'}`}</span>
		</div>
	</div>
</div>

{#if image}
	<div>
		<Picture
			src={image}
			alt="article hero"
			class="mb-4 !aspect-[1.61/1] object-cover"
			loading="eager"
			decoding="sync"
		/>
	</div>
{/if}
