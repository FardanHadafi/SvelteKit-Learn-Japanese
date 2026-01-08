import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
	// Get the session token from cookies
	const sessionToken = cookies.get('better-auth.session_token');

	if (!sessionToken) {
		throw redirect(303, '/sign-in');
	}

	try {
		// Call your Hono backend to verify the session
		const response = await fetch('http://localhost:3000/api/auth/get-session', {
			headers: {
				Cookie: `better-auth.session_token=${sessionToken}`
			}
		});

		if (!response.ok) {
			throw redirect(303, '/sign-in');
		}

		const data = await response.json();

		if (!data.session || !data.user) {
			throw redirect(303, '/sign-in');
		}

		return {
			session: data.session,
			user: data.user
		};
	} catch (error) {
		console.error('Session error:', error);
		throw redirect(303, '/sign-in');
	}
};
