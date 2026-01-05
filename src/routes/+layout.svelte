<script>
	import '../lib/style/cardForm.css';
	import '../lib/style/homePage.css';
	import favicon from '$lib/assets/favicon.svg';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
