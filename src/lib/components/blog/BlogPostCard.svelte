<script lang="ts">
	import type { Post } from '$lib/typings'
	import { Url } from '$lib/url'
	import type { View } from '@prisma/client'
	import Picture from '../Picture.svelte'
	import dayjs from 'dayjs'

	export let post: Post
	export let view: View | undefined

	const DEFAULT_VIEW_COUNT = 1
</script>

<a class="card card-hover variant-glass-surface" href={Url.BlogDetail(post.slug)}>
	<header><Picture class="object-cover" src={post.image} alt="blog post" /></header>
	<div class="p-4">
		<div class="mb-4">
			<h3 class="mb-1 font-bold">{post.title}</h3>
			<div>{post.description}</div>
		</div>
		<footer class="flex justify-between text-sm">
			<span>{dayjs(post.date).format('D MMM YYYY')}</span>
			<div>
				<span>{post.readingTime.text}</span>
				<span>&middot;</span>
				<span>{view?.count ?? DEFAULT_VIEW_COUNT} {`view${view?.count === 1 ? '' : 's'}`}</span>
			</div>
		</footer>
	</div>
</a>
