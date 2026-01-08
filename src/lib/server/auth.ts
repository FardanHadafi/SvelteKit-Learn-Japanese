import { betterAuth } from 'better-auth';

export const auth = betterAuth({
	baseURL: 'http://localhost:5173', // ✅ hardcode for now (safe)

	cookies: {
		sessionToken: {
			path: '/',
			sameSite: 'lax'
		}
	}
});
