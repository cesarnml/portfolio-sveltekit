if (localStorage.storeLightSwitch === undefined) {
	// no preference ... default to system preference
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
} else {
	// has preference ... obey lightSwitch
	// eslint-disable-next-line no-lonely-if
	if (localStorage.storeLightSwitch === 'true') {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}
