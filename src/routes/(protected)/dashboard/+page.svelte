<script lang="ts">
	import { authClient } from '$lib/authClient';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data; // from +layout.server.ts if you're passing user data

	let loading = false;
	let user = data?.user || null;

	// Or fetch user data client-side if not passed from server
	onMount(async () => {
		if (!user) {
			const session = await authClient.getSession();
			user = session.data?.user;
		}
	});

	async function handleLogout() {
		loading = true;

		try {
			await authClient.signOut();
			goto('/sign-in');
		} catch (error) {
			console.error('Logout error:', error);
			loading = false;
		}
	}
</script>

<div class="dashboard">
	<header>
		<div class="header-content">
			<h1>Dashboard</h1>
			<div class="user-section">
				{#if user}
					<span class="user-email">{user.email}</span>
				{/if}
				<button class="logout-btn" on:click={handleLogout} disabled={loading}>
					{loading ? 'Logging out...' : 'Logout'}
				</button>
			</div>
		</div>
	</header>

	<main>
		<p>Welcome to your dashboard!</p>
	</main>
</div>

<style>
    .dashboard {
        min-height: 100vh;
    }

    header {
        border-bottom: 1px solid #dee2e6;
        padding: 1rem 2rem;
    }

    .header-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        margin: 0;
        font-size: 1.5rem;
    }

    .user-section {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .user-email {
        color: #6c757d;
        font-size: 0.875rem;
    }

    .logout-btn {
        padding: 0.5rem 1rem;
        background-color: #dc2626;
        color: white;
        border: none;
        border-radius: 0.375rem;
        cursor: pointer;
        font-size: 0.875rem;
        transition: background-color 0.2s;
    }

    .logout-btn:hover:not(:disabled) {
        background-color: #b91c1c;
    }

    .logout-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    main {
        max-width: 1200px;
        margin: 2rem auto;
        padding: 0 2rem;
    }
</style>