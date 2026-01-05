import type { ServerFetch } from './auth';
import {API_URL} from '$env/static/private';

export async function apiFetch(fetch: ServerFetch, path: string, options: RequestInit = {}) {
	return fetch(`${API_URL}${path}`, {
		credentials: 'include',
		...options
	});
}
