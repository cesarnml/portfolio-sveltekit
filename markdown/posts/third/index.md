---
published: true
title: Third Svelte MDX post
description: My first markdown content
author: Cesar Mejia
tags: ['cool', 'beans']
image: '/images/hero.webp'
date: 2023-01-17
---

## First Heading

## Second Heading

### Subheading

## Third Headings

1. Make a list
2. Yup

```js:JavaScript {5-7a,3a,4a, 2r, 9-10n}
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

```js:Svelte
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

- [ ] Do checkboxes worK?
- [x] Maybe?
