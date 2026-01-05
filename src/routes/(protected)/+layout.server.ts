import { getUser } from '$lib/server/auth';

export async function load({ fetch }) {
	const user = await getUser(fetch);
	if (!user) {
		return {
			status: 302,
			redirect: '/sign-in'
		};
	}
	return {
		user
	};
}
