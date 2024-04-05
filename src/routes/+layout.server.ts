export const load = async ({ locals: { getSession } }) => ({
	session: await getSession(),
})
