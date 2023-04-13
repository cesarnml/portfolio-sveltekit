---
published: true
title: A Guide to Page Transition Animations in SvelteKit
description: Ready to take your SvelteKit app to the next level? With page transition animations, you can create a seamless user experience that will keep your users engaged and coming back for more. In this guide, we'll show you how to implement page transition animations in SvelteKit, so you can wow your users and stand out from the crowd.
excerpt: Are you looking for a way to make your SvelteKit app stand out? Page transition animations are the way to go! With these animations, you can create a smooth and seamless user experience that will keep your users engaged and coming back for more. In this guide, we'll walk you through the process of implementing page transition animations in your SvelteKit app, so you can create a user experience that is both visually stunning and functional. Get ready to wow your users!
author: Cesar Mejia
tags: ['ux', 'svelte']
image: /src/lib/assets/picture/page-transitions.png
date: 2023-04-12
updatedAt: false
---

# Create Root Layout

First, we need to create a root layout file (`layout.svelte`) in our `src/routes` directory. This file will contain the navigation bar and the `PageTransition` component that will wrap our routes.

```svelte:src/routes/+layout.svelte
<script>
	import PageTransition from '../lib/components/PageTransition.svelte';
	export let data;

	$: ({ pathname } = data);
</script>

<nav>
	<a href="/" class:active={pathname === '/'}>Home</a>
	<a href="/host/homes" class:active={pathname === '/host/homes'}>Airbnb your home</a>
</nav>
<PageTransition {pathname}>
	<slot />
</PageTransition>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #fff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}
	a {
		color: rgb(15, 134, 134);
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	.active {
		color: rgb(9, 90, 90);
		font-weight: bold;
	}
</style>
```

We need to export a `load` method in the corresponding `+layout.ts` file in order to make available the `pathname` binding available on the root page `data` prop. This binding will change whenever a page transition takes place and thus triggers our page transition animation.

```ts:+layout.ts
export const load = async ({ url }) => {
	return { pathname: url.pathname };
};
```

Finally we create the `PageTransition` component in `src/lib/components`.

```svelte:src/lib/components/PageTransition.svelte
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	export let pathname: string;
	const duration = 150;
</script>

{#key pathname}
	<div
		in:fade={{ delay: duration, easing: cubicInOut }}
		out:fade={{ duration, easing: cubicInOut }}
	>
		<slot />
	</div>
{/key}
```

Create the dummy page that we will transition to from the home page in `src/routes/host/homes` directory.

```svelte:src/routes/host/homes/+page.svelte
<div>
	<h1>Airbnb your home</h1>
</div>

<style>
	div {
		display: grid;
		place-items: center;
		height: 100vh;
	}
	h1 {
		font-size: 2rem;
		font-weight: 500;
	}
</style>
```

That's it. Now we have a fancy page transition.

Check out the [sample repo](https://github.com/cesarnml/sentry-sveltekit) and the [deployed site](https://sentry-sveltekit.vercel.app/). Ask questions in the comment section!