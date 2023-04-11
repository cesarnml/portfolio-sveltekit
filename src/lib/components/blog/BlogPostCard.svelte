<script lang="ts">
	import { Url } from '$lib/url'
	import type { View } from '@prisma/client'
	import Picture from '../Picture.svelte'
	import { fade } from 'svelte/transition'

	import dayjs from 'dayjs'
	import type { Post } from '$lib/typings/blog'

	export let post: Post
	export let view: View | undefined

	const DEFAULT_VIEW_COUNT = 1
</script>

<a class="blog-card !hover:translate-y-4 w-full" href={Url.BlogDetail(post.slug)} transition:fade>
	<header><Picture class="object-cover" src={post.image} alt="post cover image" /></header>
	<div class="w-full p-4">
		<div class="mb-4">
			<h3 class="mb-1 no-underline hover:text-secondary-300-600-token">{post.title}</h3>
			<div class="font-normal">{post.description}</div>
		</div>
		<footer class="flex w-full items-center justify-between text-sm">
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
					{`view${view?.count === 1 || view?.count === undefined ? '' : 's'}`}</span
				>
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
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		text-decoration: none;
	}
</style>
