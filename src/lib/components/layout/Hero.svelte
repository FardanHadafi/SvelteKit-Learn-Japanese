<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

	let bgContainer: HTMLDivElement;

	const chars = [
		// Hiragana
		'あ','い','う','え','お','か','き','く','け','こ',
		// Katakana
		'ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ',
		// Kanji
		'日','本','語','学','漢','字'
	];

	onMount(() => {
		const items = bgContainer.querySelectorAll('.bg-char');

		items.forEach((el, i) => {
			const dir = i % 2 === 0 ? 1 : -1;

			gsap.fromTo(
				el,
				{ x: dir * -120, opacity: 0 },
				{
					x: dir * 120,
					opacity: 0.8,
					duration: gsap.utils.random(15, 28),
					delay: gsap.utils.random(0, 6),
					repeat: -1,
					yoyo: true,
					ease: 'sine.inOut'
				}
			);
		});
	});
</script>

<!-- Hero -->
<section class="hero">
	<!-- BACKGROUND -->
	<div class="hero-bg" bind:this={bgContainer}>
		{#each chars as char, i (i)}
			<span
				class="bg-char"
				style="
					top: {Math.random() * 100}%;
					left: {Math.random() * 100}%;
					font-size: {Math.random() * 2 + 1.5}rem;
				"
			>
				{char}
			</span>
		{/each}
	</div>

	<!-- FOREGROUND -->
	<div class="hero-content">
		<h1>Learn Japanese with Structure</h1>
		<p>
			Master Hiragana, Katakana, Kanji, and real-world Japanese step by step. No fluff. Just clear
			lessons, consistent practice, and progress you can measure.
		</p>

		<div class="hero-actions">
			<a href="/sign-up" class="primary">Start Learning</a>
		</div>
	</div>
</section>
