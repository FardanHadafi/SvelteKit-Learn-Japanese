<script lang="ts">
	type KanjiItem = {
		kanji: string;
		romaji: string;
	};

	let kanjiList: KanjiItem[] = [
		// ===== Numbers & basics (N5) =====
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

		// ===== Time & days =====
		{ kanji: '日', romaji: 'hi / nichi' },
		{ kanji: '月', romaji: 'tsuki / getsu' },
		{ kanji: '火', romaji: 'hi' },
		{ kanji: '水', romaji: 'mizu' },
		{ kanji: '木', romaji: 'ki' },
		{ kanji: '金', romaji: 'kane' },
		{ kanji: '土', romaji: 'tsuchi' },
		{ kanji: '年', romaji: 'toshi' },
		{ kanji: '時', romaji: 'toki' },
		{ kanji: '分', romaji: 'fun' },
		{ kanji: '午', romaji: 'go' },
		{ kanji: '前', romaji: 'mae' },
		{ kanji: '後', romaji: 'ato' },
		{ kanji: '今', romaji: 'ima' },
		{ kanji: '毎', romaji: 'mai' },

		// ===== People & body =====
		{ kanji: '人', romaji: 'hito' },
		{ kanji: '男', romaji: 'otoko' },
		{ kanji: '女', romaji: 'onna' },
		{ kanji: '子', romaji: 'ko' },
		{ kanji: '父', romaji: 'chichi' },
		{ kanji: '母', romaji: 'haha' },
		{ kanji: '友', romaji: 'tomo' },
		{ kanji: '体', romaji: 'karada' },
		{ kanji: '口', romaji: 'kuchi' },
		{ kanji: '目', romaji: 'me' },
		{ kanji: '耳', romaji: 'mimi' },
		{ kanji: '手', romaji: 'te' },
		{ kanji: '足', romaji: 'ashi' },

		// ===== Nature & direction =====
		{ kanji: '山', romaji: 'yama' },
		{ kanji: '川', romaji: 'kawa' },
		{ kanji: '田', romaji: 'ta' },
		{ kanji: '天', romaji: 'ten' },
		{ kanji: '気', romaji: 'ki' },
		{ kanji: '雨', romaji: 'ame' },
		{ kanji: '雪', romaji: 'yuki' },
		{ kanji: '風', romaji: 'kaze' },

		{ kanji: '上', romaji: 'ue' },
		{ kanji: '下', romaji: 'shita' },
		{ kanji: '中', romaji: 'naka' },
		{ kanji: '外', romaji: 'soto' },
		{ kanji: '右', romaji: 'migi' },
		{ kanji: '左', romaji: 'hidari' },
		{ kanji: '東', romaji: 'higashi' },
		{ kanji: '西', romaji: 'nishi' },
		{ kanji: '南', romaji: 'minami' },
		{ kanji: '北', romaji: 'kita' },

		// ===== School & work =====
		{ kanji: '学', romaji: 'manabu' },
		{ kanji: '校', romaji: 'kou' },
		{ kanji: '先', romaji: 'saki' },
		{ kanji: '生', romaji: 'ikiru' },
		{ kanji: '会', romaji: 'au / kai' },
		{ kanji: '社', romaji: 'sha' },
		{ kanji: '員', romaji: 'in' },
		{ kanji: '仕', romaji: 'shigoto' },
		{ kanji: '事', romaji: 'koto' },

		// ===== Movement & actions =====
		{ kanji: '行', romaji: 'iku' },
		{ kanji: '来', romaji: 'kuru' },
		{ kanji: '帰', romaji: 'kaeru' },
		{ kanji: '歩', romaji: 'aruku' },
		{ kanji: '走', romaji: 'hashiru' },
		{ kanji: '止', romaji: 'tomaru' },
		{ kanji: '入', romaji: 'hairu' },
		{ kanji: '出', romaji: 'deru' },
		{ kanji: '開', romaji: 'akeru' },
		{ kanji: '閉', romaji: 'shimeru' },

		// ===== Verbs =====
		{ kanji: '見', romaji: 'miru' },
		{ kanji: '聞', romaji: 'kiku' },
		{ kanji: '話', romaji: 'hanasu' },
		{ kanji: '読', romaji: 'yomu' },
		{ kanji: '書', romaji: 'kaku' },
		{ kanji: '食', romaji: 'taberu' },
		{ kanji: '飲', romaji: 'nomu' },
		{ kanji: '買', romaji: 'kau' },
		{ kanji: '売', romaji: 'uru' },
		{ kanji: '作', romaji: 'tsukuru' },
		{ kanji: '使', romaji: 'tsukau' },
		{ kanji: '思', romaji: 'omou' },
		{ kanji: '知', romaji: 'shiru' },
		{ kanji: '住', romaji: 'sumu' },

		// ===== Places =====
		{ kanji: '国', romaji: 'kuni' },
		{ kanji: '町', romaji: 'machi' },
		{ kanji: '村', romaji: 'mura' },
		{ kanji: '道', romaji: 'michi' },
		{ kanji: '駅', romaji: 'eki' },
		{ kanji: '店', romaji: 'mise' },
		{ kanji: '場', romaji: 'ba' },
		{ kanji: '室', romaji: 'shitsu' },
		{ kanji: '院', romaji: 'in' },

		// ===== Adjectives =====
		{ kanji: '大', romaji: 'ookii' },
		{ kanji: '小', romaji: 'chiisai' },
		{ kanji: '多', romaji: 'ooi' },
		{ kanji: '少', romaji: 'sukunai' },
		{ kanji: '長', romaji: 'nagai' },
		{ kanji: '短', romaji: 'mijikai' },
		{ kanji: '高', romaji: 'takai' },
		{ kanji: '安', romaji: 'yasui' },
		{ kanji: '新', romaji: 'atarashii' },
		{ kanji: '古', romaji: 'furui' },

		// ===== Misc =====
		{ kanji: '円', romaji: 'en' },
		{ kanji: '電', romaji: 'den' },
		{ kanji: '白', romaji: 'shiro' },
		{ kanji: '黒', romaji: 'kuro' },
		{ kanji: '赤', romaji: 'aka' },
		{ kanji: '青', romaji: 'ao' },
		{ kanji: '何', romaji: 'nani' }
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
	<h1>N4 Kanji</h1>

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
