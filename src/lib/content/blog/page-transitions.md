---
published: true
title: "Animate Your Way to Better UX: A Guide to Page Transition Animations in SvelteKit"
description: "Ready to take your SvelteKit app to the next level? With page transition animations, you can create a seamless user experience that will keep your users engaged and coming back for more. In this guide, we'll show you how to implement page transition animations in SvelteKit, so you can wow your users and stand out from the crowd."
excerpt: "Are you looking for a way to make your SvelteKit app stand out? Page transition animations are the way to go! With these animations, you can create a smooth and seamless user experience that will keep your users engaged and coming back for more. In this guide, we'll walk you through the process of implementing page transition animations in your SvelteKit app, so you can create a user experience that is both visually stunning and functional. Get ready to wow your users!"
author: Cesar Mejia
tags: ['cool', 'beans']
image: '/src/lib/assets/picture/page-transitions.png'
date: 2023-04-14
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
