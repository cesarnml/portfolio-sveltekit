import { writable } from 'svelte/store'

function createSidebar() {
	const { subscribe, set, update } = writable(false)

	return {
		subscribe,
		open: () => set(true),
		close: () => set(false),
		toggle: () => update((prev) => !prev)
	}
}

export const sidebar = createSidebar()
