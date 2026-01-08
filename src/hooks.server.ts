import { auth } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Let better-auth handle auth routes
	if (event.url.pathname.startsWith('/api/auth')) {
		return auth.handler(event.request);
	}

	// Otherwise continue normally
	return resolve(event);
};
