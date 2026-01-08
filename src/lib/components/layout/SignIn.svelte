<script lang="ts">
	import { authClient } from '$lib/authClient';
	import { goto } from '$app/navigation';

	export let form;

	$: if (form?.success) {
		goto("/dashboard");
	}

	let email = "";
	let password = "";
	let loading = false;
	let error = "";

	async function handleSignin() {
		loading = true;
		error = "";

		try {
			const result = await authClient.signIn.email({
				email,
				password,
			});

			if (result.error) {
				error = result.error.message || "Invalid email or password";
				loading = false;
				return;
			}

			// Success - redirect
			goto("/dashboard");
		} catch (e) {
			console.error("Sign in error:", e);
			error = "Invalid email or password";
			loading = false;
		}
	}
</script>

<div class="auth-wrapper">
	<div class="auth-card">
		<h1>Sign In</h1>
		<div class="auth-home">
			<p>Access your account</p>
			<a href="/">Home</a>
		</div>

		<form on:submit|preventDefault={handleSignin}>
			<div class="field">
				<label for="email">Email</label>
				<input id="email" name="email" type="email" bind:value={email} required />
			</div>

			<div class="field">
				<label for="password">Password</label>
				<input id="password" name="password" type="password" bind:value={password} required />
			</div>

			<button type="submit" disabled={loading}>
				{loading ? "Signing in..." : "Sign in"}
			</button>
		</form>

		{#if error}
			<p class="error">{error}</p>
		{/if}

		<div class="auth-footer">
			Don't have an account?
			<a href="/sign-up">Create one</a>
		</div>
	</div>
</div>