import { fail, redirect } from '@sveltejs/kit';
import { apiFetch } from '$lib/server/api';

export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();

		const name = formData.get('name');
		const email = formData.get('email');
		const password = formData.get('password');

		if (!name || !email || !password) {
			return fail(400, { error: 'All fields are required' });
		}

		const res = await apiFetch(fetch, '/api/auth/sign-up/email', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, password })
		});

		if (!res.ok) {
			const data = await res.json();
			console.log(data);
			return fail(400, { error: data.error ?? 'Signup failed' });
		}

		throw redirect(302, '/sign-in');
	}
};
