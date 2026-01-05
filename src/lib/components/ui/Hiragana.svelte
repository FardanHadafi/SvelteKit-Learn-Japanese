<script lang="ts">
	const vowels = ['a', 'i', 'u', 'e', 'o'];

	const rows = [
		{ label: '', kana: ['あ', 'い', 'う', 'え', 'お'] },
		{ label: 'k', kana: ['か', 'き', 'く', 'け', 'こ'] },
		{ label: 's', kana: ['さ', 'し', 'す', 'せ', 'そ'] },
		{ label: 't', kana: ['た', 'ち', 'つ', 'て', 'と'] },
		{ label: 'n', kana: ['な', 'に', 'ぬ', 'ね', 'の'] },
		{ label: 'h', kana: ['は', 'ひ', 'ふ', 'へ', 'ほ'] },
		{ label: 'm', kana: ['ま', 'み', 'む', 'め', 'も'] },
		{ label: 'y', kana: ['や', null, 'ゆ', null, 'よ'] },
		{ label: 'r', kana: ['ら', 'り', 'る', 'れ', 'ろ'] },
		{ label: 'w', kana: ['わ', null, null, null, 'を'] }
	];
</script>

<section class="hiragana-page">
	<h1>Hiragana</h1>

	<div class="hiragana-grid">
		<div class="corner"></div>

		{#each vowels as v, i (v)}
			<div class="header">{v}</div>
		{/each}

		{#each rows as row, r (row.label || r)}
			<div class="row-label">{row.label}</div>

			{#each row.kana as char, c (`${row.label}-${c}`)}
				<div class="cell" tabindex="0">
					{#if char !== null}
						{char}
					{/if}
				</div>
			{/each}
		{/each}

		<div class="row-label"></div>
		<div class="cell span">ン</div>
	</div>

</section>