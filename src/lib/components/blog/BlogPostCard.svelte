<script lang="ts">
	import type { Post } from '$lib/typings/blog'
	import { Url } from '$lib/url'
	import type { View } from '@prisma/client'
	import { fade } from 'svelte/transition'
	import Picture from '../Picture.svelte'

	export let post: Post
	export let view: View | undefined

	const DEFAULT_VIEW_COUNT = 1
</script>

<a
	class="blog-card card-hover relative flex w-full flex-col justify-between overflow-hidden"
	href={Url.BlogDetail(post.slug)}
	transition:fade
>
	<header class="relative">
		<Picture class="object-cover" src={post.image} alt="post cover image" />
		<div
			class="badge badge-glass absolute right-2 top-2 border border-indigo-300 !bg-indigo-900/70 text-sm backdrop-blur-sm"
		>
			{post.readingTime.text}
		</div>
		<div
			class="badge badge-glass absolute left-2 top-2 border border-zinc-300 !bg-zinc-900/70 text-sm backdrop-blur-sm"
		>
			{post.date}
		</div>
	</header>
	<div class="flex h-full flex-col justify-between gap-4 p-4">
		<h4 class="no-underline hover:underline">{post.title}</h4>
		<div class="flex-grow font-normal">{post.description}</div>
		<footer class="flex w-full items-baseline justify-between text-sm">
			<div class="inline-flex gap-2">
				{#each post.tags as tag, idx}
					<span
						class={`badge badge-glass text-sm font-normal ${
							idx === 0 ? '!bg-cyan-400/30' : '!bg-rose-400/30'
						}`}
						>{tag}
					</span>
				{/each}
			</div>
			<div class="text-right">
				<span class=" text-sm font-normal"
					>{view?.count ?? DEFAULT_VIEW_COUNT}
					{`view${view?.count === 1 || view?.count === undefined ? '' : 's'}`}
				</span>
			</div>
		</footer>
	</div>
</a>

<style lang="postcss">
	.blog-card {
		background-color: rgba(var(--color-surface-600) / 0.3);
		box-shadow: var(--card-shadow);
		color: var(--color--text) !important;
		border-radius: var(--theme-rounded-container);
	}
</style>
