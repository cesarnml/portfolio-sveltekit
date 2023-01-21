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

```js
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

<ReusableImage image="revue-subscribers-list-search.png" alt="cool"/>

- [ ] Do checkboxes worK?
- [x] Maybe?
