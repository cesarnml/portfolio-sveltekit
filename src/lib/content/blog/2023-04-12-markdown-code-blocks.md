---
published: false
title: How to Create Awesome Markdown Code Blocks with Svelte and MDsveX
description: Ready to take your coding blogs to the next level? With Svelte and MDsveX, you can create stunning, interactive code snippets that will wow your readers. In this guide, we'll show you how to create cool markdown code blogs with Svelte and MDsveX, so you can share your knowledge like a pro.
excerpt: Are you tired of boring code snippets in your blog posts? Spice things up with Svelte and MDsveX! With their powers combined, you can create eye-catching, interactive code blocks that will engage your readers like never before. In this guide, we'll walk you through the process of creating cool markdown code blogs with Svelte and MDsveX, so you can showcase your coding skills and knowledge in style. Get ready to take your blogs to the next level!
author: Cesar Mejia
tags: ['markdown', 'svelte']
image: /src/lib/assets/picture/code-blocks.png
date: 2023-04-12
updatedAt: false
---

# Setting up a Page Transition Animation with SvelteKit
Page transition animations can significantly improve the user experience on your website by providing a seamless visual transition between different pages. With SvelteKit, it's easy to set up page transition animations using the built-in animate function.

In this blog post, we will go through the steps of setting up a page transition animation using SvelteKit.

## Step 1: Install SvelteKit
If you haven't already, you'll need to install SvelteKit. You can do this using npm by running the following command:

```:perl
Copy code
npm init svelte@next my-app
cd my-app
npm install
```

##Step 2: Create a new Svelte component
Create a new Svelte component that will contain your page transition animation. For example, you could create a file called Transition.svelte. Inside this file, you can define the transition animation using CSS transitions or animations.

Here's an example of a simple page transition animation using CSS transitions:

```html
<style>
  .page {
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
  }
  .page.visible {
    opacity: 1;
  }
</style>

<div>
  <slot></slot>
</div>
```

This code defines a page transition animation that fades in the new page over 0.3 seconds using CSS transitions.

## Step 3: Update your SvelteKit layout
Update your SvelteKit layout to use the animate function and your new Transition component.

```html
<script>
  import { animate } from '$$app/env';
  import Transition from './Transition.svelte';

  export let component;
  export let props;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Transition bind:visible animate:fade>
  <svelte:component this={component} {...props} />
</Transition>

<style>
  .page {
    height: 100%;
  }
</style>
```

This code uses the animate function to apply the fade animation to the Transition component. It also passes the current page component and props to the Transition component using the svelte:component special element.

## Step 4: Add some styles
Finally, add some styles to make sure the Transition component fills the entire viewport:

```html
<style>
  :global(html),
  :global(body),
  :global(#svelte) {
    height: 100%;
  }
</style>
```

This code sets the height of the html, body, and #svelte elements to 100%, which ensures that the Transition component fills the entire viewport.

And that's it! You've now set up a simple page transition animation using SvelteKit. Of course, you can customize the animation to fit your specific needs by changing the CSS transitions or animations used in the Transition component.