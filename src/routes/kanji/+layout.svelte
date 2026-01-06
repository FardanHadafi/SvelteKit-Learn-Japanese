<script>
	import favicon from '$lib/assets/favicon.svg';
	import "../../lib/style/N5.css"
	import "../../lib/style/N4.css"
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="navbar">
	<div class="nav-links">
		<a href="/">Home</a>
		<a href="/kanji">Kanji</a>
		<a href="/kanji/n5">N5</a>
		<a href="/kanji/n4">N4</a>
	</div>
</nav>

<style>
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .navbar {
        padding: 1.2rem 2rem;
        /*border-bottom: 1px solid var(--border)*/;
        background: transparent;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
    }

    .nav-links {
        display: flex;
        gap: 1.2rem;
    }

    .nav-links a {
        font-size: 0.7rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--muted);
        padding: 0.4rem 0.6rem;
        border-bottom: 1px solid transparent;
        transition: color 0.15s ease, border-color 0.15s ease;
    }

    .nav-links a:hover {
        color: var(--text);
        border-color: var(--accent);
    }
</style>

{@render children()}