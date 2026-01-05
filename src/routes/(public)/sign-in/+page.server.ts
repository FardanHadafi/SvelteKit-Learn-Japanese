import { apiFetch } from '$lib/server/api.js';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = Object.fromEntries(await request.formData());
		const res = await apiFetch(fetch, '/auth/sign-in/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		if (!res.ok) {
			return {
				status: 400,
				error: await res.json()
			};
		}
		return {
			status: 302,
			redirect: '/dashboard'
		};
	}
};
