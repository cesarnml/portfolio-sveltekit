---
published: true
title: First Svelte MDX post
description: My first markdown content
author: Cesar Napoleon Mejia Leiva
tags: ['cool', 'beans']
date: 2023-01-17
---

<script>
  import ReusableButton from '@components/ReusableButton.svelte'
  import ReusableImage from '@components/ReusableImage.svelte'
</script>

## Table of Contents

## Heading 1

## Heading 2

### Heading 3

<ReusableButton />

## Heading 4

1. Make a list
2. Yup

```js:JavaScript {5-7}
export async function load({ fetch }) {
	const res = await fetch(`/posts.json`)
	if (res.ok) {
		const { posts } = await res.json()
		return { posts }
	}
}
const code = 'yay!'

const code = 'yay!'
```

```js:Svelte {2,4,7}
export async function load({ fetch }) {
	const res = await fetch(`/posts.json`)
	if (res.ok) {
		const { posts } = await res.json()
		return { posts }
	}
}
const code = 'yay!'

const code = 'yay!'
```

<ReusableImage src="/images/revue-subscribers-list-search.png" alt="cool"/>

- [ ] Do checkboxes worK?
- [x] Maybe?

```svelte:Svelte
<script lang="ts">
	import { Url } from '@lib/url'
</script>

<nav class="navbar bg-base-100">
	<div class="navbar-start">
		<a class="text-xl normal-case btn btn-ghost" href="#logo">daisyUI</a>
	</div>
	<div class="navbar-center lg:flex">
		<ul class="px-1 menu menu-horizontal">
			<li><a href={Url.Home}>Home</a></li>
			<li><a href={Url.About}>About</a></li>
			<li><a href={Url.Blog}>Blog</a></li>
			<li><a href={Url.Contact}>Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn" href="#bang">Get started</a>
	</div>
</nav>
```
