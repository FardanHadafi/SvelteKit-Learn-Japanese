export type ServerFetch = typeof globalThis.fetch;
import {API_URL} from '$env/static/private';

export async function getUser(fetch: ServerFetch) {
	const res = await fetch(`${API_URL}/me`, {
		credentials: 'include'
	});
	if (!res.ok) {
		return null;
	}
	return await res.json();
}
