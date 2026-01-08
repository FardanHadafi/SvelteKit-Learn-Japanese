import { createAuthClient } from 'better-auth/client';

export const authClient = createAuthClient({
	baseURL: 'http://localhost:3000',
	credentials: "include"
});

export const { signIn, signUp, signOut, useSession } = authClient;