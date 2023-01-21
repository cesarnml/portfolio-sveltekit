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
</script>

# Heading 1

## This is more markdown **base content**

<ReusableButton />

### Heading 3

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

![test](./revue-subscribers-list-search.png)

- [ ] Do checkboxes worK?
- [x] Maybe?

[external link](http://google.com)
~~strikethrough~~

x^2^

<!-- <video src="./sample.mp4" type="video/mp4"> -->
