import type { RequestHandler } from './$types';

export const ALL: RequestHandler = async ({ request, fetch, params }) => {
	return fetch(`http://localhost:3000/api/auth/${params.path}`, {
		method: request.method,
		headers: request.headers,
		body: request.body,
		credentials: 'include'
	});
};
