export const load = async ({ locals: { getSession } }) => ({
	session: getSession(),
})
