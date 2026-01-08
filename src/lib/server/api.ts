import { API_URL } from '$env/static/private';

export async function apiFetch(
	fetch: typeof globalThis.fetch,
	path: string,
	options: RequestInit = {}
) {
	return fetch(`${API_URL}${path}`, {
		...options,
		credentials: 'include'
	});
}
