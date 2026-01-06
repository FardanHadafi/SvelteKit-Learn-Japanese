<script lang="ts">
	type KanjiItem = {
		kanji: string;
		romaji: string;
	};

	let kanjiList: KanjiItem[] = [
		{ kanji: '一', romaji: 'ichi' },
		{ kanji: '二', romaji: 'ni' },
		{ kanji: '三', romaji: 'san' },
		{ kanji: '四', romaji: 'yon' },
		{ kanji: '五', romaji: 'go' },
		{ kanji: '六', romaji: 'roku' },
		{ kanji: '七', romaji: 'nana' },
		{ kanji: '八', romaji: 'hachi' },
		{ kanji: '九', romaji: 'kyuu' },
		{ kanji: '十', romaji: 'juu' },

		{ kanji: '日', romaji: 'hi / nichi' },
		{ kanji: '月', romaji: 'tsuki / getsu' },
		{ kanji: '火', romaji: 'hi' },
		{ kanji: '水', romaji: 'mizu' },
		{ kanji: '木', romaji: 'ki' },
		{ kanji: '金', romaji: 'kane' },
		{ kanji: '土', romaji: 'tsuchi' },

		{ kanji: '人', romaji: 'hito' },
		{ kanji: '男', romaji: 'otoko' },
		{ kanji: '女', romaji: 'onna' },
		{ kanji: '子', romaji: 'ko' },

		{ kanji: '山', romaji: 'yama' },
		{ kanji: '川', romaji: 'kawa' },
		{ kanji: '田', romaji: 'ta' },
		{ kanji: '天', romaji: 'ten' },

		{ kanji: '上', romaji: 'ue' },
		{ kanji: '下', romaji: 'shita' },
		{ kanji: '中', romaji: 'naka' },
		{ kanji: '外', romaji: 'soto' },

		{ kanji: '右', romaji: 'migi' },
		{ kanji: '左', romaji: 'hidari' },

		{ kanji: '大', romaji: 'ookii' },
		{ kanji: '小', romaji: 'chiisai' },

		{ kanji: '学', romaji: 'manabu' },
		{ kanji: '校', romaji: 'kou' },

		{ kanji: '先', romaji: 'saki' },
		{ kanji: '生', romaji: 'ikiru' },

		{ kanji: '年', romaji: 'toshi' },
		{ kanji: '時', romaji: 'toki' },
		{ kanji: '分', romaji: 'fun' },

		{ kanji: '本', romaji: 'hon' },
		{ kanji: '名', romaji: 'na' },

		{ kanji: '見', romaji: 'miru' },
		{ kanji: '行', romaji: 'iku' },
		{ kanji: '来', romaji: 'kuru' },
		{ kanji: '帰', romaji: 'kaeru' },

		{ kanji: '食', romaji: 'taberu' },
		{ kanji: '飲', romaji: 'nomu' },

		{ kanji: '話', romaji: 'hanasu' },
		{ kanji: '聞', romaji: 'kiku' },

		{ kanji: '読', romaji: 'yomu' },
		{ kanji: '書', romaji: 'kaku' },

		{ kanji: '買', romaji: 'kau' },
		{ kanji: '売', romaji: 'uru' },

		{ kanji: '白', romaji: 'shiro' },
		{ kanji: '黒', romaji: 'kuro' },
		{ kanji: '赤', romaji: 'aka' },
		{ kanji: '青', romaji: 'ao' },

		{ kanji: '雨', romaji: 'ame' },
		{ kanji: '電', romaji: 'den' },

		{ kanji: '車', romaji: 'kuruma' },
		{ kanji: '駅', romaji: 'eki' },

		{ kanji: '国', romaji: 'kuni' },
		{ kanji: '円', romaji: 'en' },

		{ kanji: '何', romaji: 'nani' },
		{ kanji: '毎', romaji: 'mai' },
		{ kanji: '午', romaji: 'go' },
		{ kanji: '後', romaji: 'ato' },
		{ kanji: '前', romaji: 'mae' }
	];

	let items = 21;
	let currentPage = 1;
	$: totalPages = Math.ceil(kanjiList.length / items);
	$: paginatedKanjis = kanjiList.slice((currentPage - 1 ) * items, currentPage * items);

	function nextPage() {
		if (currentPage < totalPages) currentPage++;
	}

	function prevPage() {
		if (currentPage > 1) currentPage--;
	}

</script>


<section class="kanji-page">
	<h1>N5 Kanji</h1>

	<div class="kanji-grid">
		{#each paginatedKanjis as item (item.kanji)}
			<div class="cell" tabindex="0">
				<span class="kanji">{item.kanji}</span>
				<span class="romaji">{item.romaji}</span>
			</div>
		{/each}
	</div>

	<!-- PAGINATION -->
	<div class="pagination">
		<button onclick={prevPage} disabled={currentPage === 1}>Prev</button>
		<span class="page-info">
		Page {currentPage} / {totalPages}
	</span>
		<button onclick={nextPage} disabled={currentPage === totalPages}>Next</button>
	</div>
</section>