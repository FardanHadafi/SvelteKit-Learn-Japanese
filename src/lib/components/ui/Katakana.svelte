<script lang="ts">
	const vowels = ['a', 'i', 'u', 'e', 'o'];

	const rows = [
		{ label: '',  kana: ['ア', 'イ', 'ウ', 'エ', 'オ'] },
		{ label: 'k', kana: ['カ', 'キ', 'ク', 'ケ', 'コ'] },
		{ label: 's', kana: ['サ', 'シ', 'ス', 'セ', 'ソ'] },
		{ label: 't', kana: ['タ', 'チ', 'ツ', 'テ', 'ト'] },
		{ label: 'n', kana: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'] },
		{ label: 'h', kana: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'] },
		{ label: 'm', kana: ['マ', 'ミ', 'ム', 'メ', 'モ'] },
		{ label: 'y', kana: ['ヤ', null, 'ユ', null, 'ヨ'] },
		{ label: 'r', kana: ['ラ', 'リ', 'ル', 'レ', 'ロ'] },
		{ label: 'w', kana: ['ワ', null, null, null, 'ヲ'] }
	];
</script>

<section class="katakana-page">
	<h1>Katakana</h1>

	<div class="katakana-grid">
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