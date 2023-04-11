---
published: true
title: "Scrolling to the Top: How to Track Human Page Views in SvelteKit"
description: "Are you tired of inaccurate page view data due to bots and crawlers? With user scroll tracking, you can ensure that you're only tracking page views by real humans. In this guide, we'll show you how to implement user scroll tracking in SvelteKit, so you can get accurate data on your website's traffic."
excerpt: "Are bots and crawlers skewing your website's page view data? Don't worry, there's a solution. With user scroll tracking, you can accurately track page views by real humans, so you can make data-driven decisions that actually reflect your users' behavior. In this guide, we'll walk you through the process of implementing user scroll tracking in your SvelteKit app, so you can get accurate data on your website's traffic. Get ready to scroll to the top and get the data you need!"
author: Cesar Mejia
tags: ['svelte', 'supabase']
image: '/src/lib/assets/picture/giscus.png'
date: 2023-04-17
updatedAt: false
---

## Markdown Examples

This is the first line.  
And this is the second line.

I just love **bold text**.
Italicized text is the _cat's meow_.

> Dorothy followed her through many of the beautiful rooms in her castle.

1. First item
2. Second item
3. Third item
   1. Indented item
   2. Indented item
4. Fourth item

- unordered
  - indented list

## Code Examples

### Inline Code

Here is some inline code `console.log('Hey I'm inline-code')`
### No Highlighting

```svelte
<script lang="ts">
	import { page } from '$app/stores'
	import { Url } from '$lib/url'
	export let data

	const { posts } = data
</script>

<svelte:head>
	<title>Cesar Mejia's Web Portfolio</title>
	<link rel="canonical" href={$page.url.href} />
</svelte:head>

<div>
	<ul>
		{#each posts as post (post.slug)}
			<li class="mb-4"><a class="unstyled" href={Url.BlogDetail(post.slug)}>{post.title}</a></li>
		{/each}
	</ul>
</div>
```

### With Highlighting

```js {5-7a,3a,4a, 2r, 10n, 12n}
export async function load({ fetch }) {
	const variable = "this is a super long variable declaration come on"
	const res = await fetch(`/posts.json`)
	if (res.ok) {
		const { posts } = await res.json()
		return { posts }
	}
}

const code = 'yay!'

const code = 'yay!'
```

### With Focus
```ts {4-6f}
export async function load({ fetch }) {
	const variable = "this is a super long variable declaration come on"
	const res = await fetch(`/posts.json`)
	if (res.ok) {
		const { posts } = await res.json()
		return { posts }
	}
}

const code = 'yay!'

const code = 'yay!'
```
## Remark Abbreviations Examples

This plugin works on MDAST, a Markdown AST
implemented by [remark](https://github.com/remarkjs/remark)

*[MDAST]: Markdown Abstract Syntax Tree
*[AST]: Abstract Syntax Tree

## Remark-Github Examples

- ref: https://github.com/remarkjs/remark-github
- Commit: 63cf895ba37b7bca05bdbfcb8fafe1aae3bde839
- Discussion: #1
- Issue: #2
- Mention: @cesarnml

## A11y Emojis

test 🙂 inline
