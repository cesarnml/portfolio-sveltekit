<script lang="ts">
	import type { Post } from '$lib/typings/blog'
	import { Url } from '$lib/url'
	import type { View } from '@prisma/client'
	import { fly } from 'svelte/transition'
	import Picture from '../Picture.svelte'
	import { modeCurrent } from '@skeletonlabs/skeleton'
	import { goto } from '$app/navigation'

	export let post: Post
	export let view: View | undefined

	const DEFAULT_VIEW_COUNT = 1

	const handlePostClick = () => goto(`/blog/${post.slug}`)

	const handleTagClick = (tag: string) => goto(`/blog/tag/${tag}`)
</script>

<div
	class="blog-card card-hover relative flex w-full flex-col justify-between overflow-hidden"
	transition:fly
>
	<header class="relative">
		<a href={Url.BlogDetail(post.slug)} aria-label={post.title}>
			<Picture
				class="!aspect-[1.61/1] bg-gray-300 object-cover"
				src={post.image}
				alt="post cover image"
			/>
		</a>
		<div
			class={`badge-glass badge absolute right-2 top-2 border border-indigo-300 ${
				$modeCurrent ? '!bg-indigo-200/70' : '!bg-indigo-700/70'
			} text-sm backdrop-blur-sm`}
		>
			{post.readingTime.text}
		</div>
		<div
			class={`badge-glass badge absolute left-2 top-2 border border-zinc-300  ${
				$modeCurrent ? '!bg-indigo-200/70' : '!bg-indigo-700/70'
			} text-sm backdrop-blur-sm`}
		>
			{post.date}
		</div>
	</header>
	<div class="flex h-full flex-col justify-between gap-4 p-4">
		<a href={Url.BlogDetail(post.slug)}>
			<h3 class="text-lg no-underline">{post.title}</h3>
		</a>
		<div class="line-clamp-3 flex-grow font-normal">{post.description}</div>
		<button class="btn variant-filled-primary self-end" on:click={handlePostClick}>Read more</button
		>
		<hr />
		<footer class="flex w-full items-baseline justify-between text-sm">
			<div class="inline-flex gap-2">
				{#each post.tags as tag, idx}
					<button
						class={`badge-glass badge text-sm font-normal hover:scale-110 ${
							idx === 0 ? '!bg-cyan-400/30' : '!bg-rose-400/30'
						}`}
						on:click={() => handleTagClick(tag)}
						>{tag}
					</button>
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
</div>

<style lang="postcss">
	.blog-card {
		background-color: rgba(var(--color-surface-600) / 0.3);
		box-shadow: var(--card-shadow);
		color: var(--color--text) !important;
		border-radius: var(--theme-rounded-container);
	}
</style>
