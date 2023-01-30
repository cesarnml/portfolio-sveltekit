<script lang="ts">
	import avatarSrc from '$lib/assets/images/favicon.png'
	import Img from '@zerodevx/svelte-img'
	import 'iconify-icon'
	export let author: string
	export let date: string
	export let readingTime: string
	export let wordCount: number
	export let image: string = ''

	const formattedDate = new Date(date).toDateString().split(' ').slice(1).join(' ')
</script>

<div class="flex items-center gap-4">
	<div class="w-12 h-12 md:w-14 md:h-14">
		<Img class="m-0" src={avatarSrc} alt="avatar" />
	</div>
	<div class="flex flex-col">
		<div class="space-x-1">
			<span class="text-lg font-semibold">{author}</span>
			<span>&middot;</span>
			<span>{formattedDate}</span>
		</div>
		<div class="flex items-center space-x-2">
			<div class="flex items-center gap-2">
				<iconify-icon icon="material-symbols:menu-book-outline" alt="book-outline" class="text-lg" />
				<span> {readingTime}</span>
			</div>
			<span>&middot;</span>
			<span>{wordCount} words</span>
		</div>
	</div>
</div>

<div>
	<img src={image} alt="article hero" class="mb-4" />
</div>
