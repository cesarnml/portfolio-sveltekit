---
published: true
title: How to Setup Sentry Error Monitoring with SvelteKit
description: Debugging shouldn't be a nightmare! In this guide, I'll show you how to set up Sentry.io for error and exception handling in your SvelteKit application, empowering you to identify and resolve issues like a pro.
excerpt: Are you ready to take your debugging skills to the next level? Sentry.io is the ultimate tool for monitoring errors and exceptions in your SvelteKit application. Say goodbye to sleepless nights and hello to a smoother user experience. Our guide will walk you through the process of configuring Sentry.io, so you can unleash your inner debugger and tackle bugs like a boss. Let's get started!
author: Cesar Mejia
tags: ['sentry', 'svelte', 'devops']
image: /src/lib/assets/picture/sentry.png
date: 2023-04-11
updatedAt: false
---

## TLDR

For the impatient, here is the [sample repo](https://github.com/cesarnml/sentry-sveltekit) that illustrates the setup below and the project is deployed [here](https://sentry-sveltekit.vercel.app/).

## Intro

Errors and exceptions are inevitable in any application. However, what separates the brave from the foolhardy is the ability to handle them with grace and elegance. In this guide, I'll show you how to set up error and exception handling in your [SvelteKit](https://kit.svelte.dev/) project using [Sentry.io](https://sentry.io).

We'll cover all the bases, from monitoring production server and client errors to uploading source maps to Sentry on build. We'll even enable Error Replay Tracking so you can see exactly what your users were doing when an error occurred.

So grab your sword and shield, and let's get started.

## Goals

- Monitor production server/client errors
- Upload source maps to Sentry on build
- Enable Error Replay Tracking

## Setup

### Create SvelteKit App

First things first, we need to create a SvelteKit app. Run the following command to create a new SvelteKit app:

```zsh
pnpm create svelte@latest sentry-sveltekit
```

### Install Sentry Packages

Next, we need to install the Sentry packages. Run the following command to install them:


```zsh
pnpm add -D @sentry/node @sentry/svelte @sentry/vite-plugin
```

### Create Environmental Variables

Before we can proceed, we need to create the necessary environmental variables. Add the following variables to your `.env` file:

```zsh:.env
PUBLIC_SENTRY_ORG=FOUND_IN_SENTRY_PROJECT_SETTINGS
PUBLIC_SENTRY_PROJECT=FOUND_IN_SENTRY_PROJECT_SETTINGS
PUBLIC_SENTRY_DSN=FOUND_IN_SENTRY_PROJECT_SETTINGS
SENTRY_AUTH_TOKEN=SEE_AUTH_TOKEN_LINK_BELOW
```
[Sentry Auth Token](https://sentry.io/settings/account/api/auth-tokens/)(Required scopes: `project:releases` and `org:read`)
### Add sentryVitePlugin to Vite Config

We're almost there! Next, we need to add the `sentryVitePlugin` to our Vite config. Open `vite.config.ts` and add the following:

```ts:vite.config.ts {1a,6-9a,11-3a,16-25a}
import { sentryVitePlugin } from '@sentry/vite-plugin';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

const config = defineConfig(({ mode }) => {
	// Only setup Sentry in production
	const isProduction = mode === 'production';
	// Gain access to environmental variables within vite config
	const env = loadEnv(mode, process.cwd(), '');
	return {
		build: {
			sourcemap: true // Tell vite to emit source maps
		},
		plugins: [
			sveltekit(),
			// Add the sentry-vite-plugin last
			isProduction
				? sentryVitePlugin({
						telemetry: false, // Privacy :-)
						org: env.PUBLIC_SENTRY_ORG, // can be hardcode
						project: env.PUBLIC_SENTRY_PROJECT, // can be hardcode
						authToken: env.SENTRY_AUTH_TOKEN, // must be secret
						include: './svelte-kit/output' // default build output for source maps. Uploaded to Sentry on deploy
				  })
				: ''
		],
	};
});

export default config;
```

### Capture Frontend Exceptions via hooks.client.ts

Now it's time to capture frontend exceptions. Open `hooks.client.ts` and add the following:

```ts:src/hooks.client.ts
import type { HandleClientError } from '@sveltejs/kit';
import * as Sentry from '@sentry/svelte';
import { PUBLIC_SENTRY_DSN } from '$env/static/public';

if (import.meta.env.PROD) {
	Sentry.init({
		dsn: PUBLIC_SENTRY_DSN, // can be hardcoded
		integrations: [
			new Sentry.BrowserTracing(), // Detail trace stack
			new Sentry.Replay({ // Visual replay of errors (cool!)
				maskAllInputs: true, // respect user privacy on replays
				maskAllText: true,
				blockAllMedia: true
			})
		],
		tracesSampleRate: 1.0, // lower settings if swamped with errors
		replaysSessionSampleRate: 1.0,
		replaysOnErrorSampleRate: 1.0
	});
}

export const handleError: HandleClientError = ({ error, event }) => {
	const errorId = crypto.randomUUID(); // add unique errorId for easy reference

	// Only emit errors in production
	if (import.meta.env.PROD) {
		Sentry.captureException(error, {
			contexts: { sveltekit: { event, errorId } }
		});
	}

	return {
		message: "An unexpected error occurred. We're working on it!",
		errorId
	};
};
```

### Capture Backend Exceptions via `hooks.server.ts`

Similar to the `hooks.client.ts`, the `hooks.server.ts` file captures backend exceptions and sends them to Sentry for analysis.

```ts:src/hooks.server.ts
import type { HandleServerError } from '@sveltejs/kit';
import crypto from 'crypto';
import * as Sentry from '@sentry/node';
import { PUBLIC_SENTRY_DSN } from '$env/static/public';

// Only emit errors in production
if (import.meta.env.PROD) {
	Sentry.init({
		dsn: PUBLIC_SENTRY_DSN,
		tracesSampleRate: 1.0
	});
}

export const handleError: HandleServerError = ({ error, event }) => {
	const errorId = crypto.randomUUID();

	// Only emit errors in production
	if (import.meta.env.PROD) {
		Sentry.captureException(error, {
			contexts: { sveltekit: { event, errorId } }
		});
	}

	return {
		message: 'An unexpected error occurred. I have spoken.',
		errorId
	};
};
```

## Wrap Up

There you have it, fellow warriors of the web. With Sentry.io and SvelteKit, you now have the tools to handle errors and exceptions with the grace and elegance of a seasoned warrior. No longer will you be caught off guard by unexpected errors or left in the dark about what your users were doing when an issue occurred.

So take this knowledge and go forth, fearless developers, confident in your ability to handle any error that comes your way. And remember, when in doubt, trust in the power of Sentry and the might of SvelteKit.
