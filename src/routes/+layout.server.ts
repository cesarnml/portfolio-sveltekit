export const prerender = true

export const load = async ({ locals: { getSession } }) => ({
	session: getSession(),
})
