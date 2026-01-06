<script lang="ts">
	import "../../../lib/style/vocabN4.css"

	type VocabItem = {
		word: string;
		reading: string;
		meaning: string;
	}

	let vocabulary: VocabItem[] = [
		// ===== People & daily life =====
		{ word: '家族', reading: 'かぞく', meaning: 'family' },
		{ word: '会社員', reading: 'かいしゃいん', meaning: 'company employee' },
		{ word: '店員', reading: 'てんいん', meaning: 'store clerk' },
		{ word: '住所', reading: 'じゅうしょ', meaning: 'address' },
		{ word: '電話', reading: 'でんわ', meaning: 'telephone' },

		// ===== Verbs =====
		{ word: '働く', reading: 'はたらく', meaning: 'to work' },
		{ word: '休む', reading: 'やすむ', meaning: 'to rest, take a break' },
		{ word: '始める', reading: 'はじめる', meaning: 'to start' },
		{ word: '終わる', reading: 'おわる', meaning: 'to finish' },
		{ word: '教える', reading: 'おしえる', meaning: 'to teach' },

		{ word: '習う', reading: 'ならう', meaning: 'to learn' },
		{ word: '考える', reading: 'かんがえる', meaning: 'to think' },
		{ word: '決める', reading: 'きめる', meaning: 'to decide' },
		{ word: '続ける', reading: 'つづける', meaning: 'to continue' },
		{ word: '助ける', reading: 'たすける', meaning: 'to help' },

		// ===== Adjectives =====
		{ word: '難しい', reading: 'むずかしい', meaning: 'difficult' },
		{ word: '簡単', reading: 'かんたん', meaning: 'easy, simple' },
		{ word: '便利', reading: 'べんり', meaning: 'convenient' },
		{ word: '不便', reading: 'ふべん', meaning: 'inconvenient' },
		{ word: '大切', reading: 'たいせつ', meaning: 'important' },

		// ===== Places =====
		{ word: '病院', reading: 'びょういん', meaning: 'hospital' },
		{ word: '銀行', reading: 'ぎんこう', meaning: 'bank' },
		{ word: '郵便局', reading: 'ゆうびんきょく', meaning: 'post office' },
		{ word: '駅前', reading: 'えきまえ', meaning: 'in front of the station' },
		{ word: '近く', reading: 'ちかく', meaning: 'nearby' },

		// ===== Time & frequency =====
		{ word: '最近', reading: 'さいきん', meaning: 'recently' },
		{ word: '予定', reading: 'よてい', meaning: 'plan, schedule' },
		{ word: '約束', reading: 'やくそく', meaning: 'promise, appointment' },
		{ word: '必要', reading: 'ひつよう', meaning: 'necessary' },
		{ word: '大丈夫', reading: 'だいじょうぶ', meaning: 'okay, alright' },

		// ===== Travel & movement =====
		{ word: '旅行', reading: 'りょこう', meaning: 'travel' },
		{ word: '出発', reading: 'しゅっぱつ', meaning: 'departure' },
		{ word: '到着', reading: 'とうちゃく', meaning: 'arrival' },
		{ word: '運転', reading: 'うんてん', meaning: 'driving' },
		{ word: '地図', reading: 'ちず', meaning: 'map' },

		// ===== Feelings =====
		{ word: '安心', reading: 'あんしん', meaning: 'relief' },
		{ word: '心配', reading: 'しんぱい', meaning: 'worry' },
		{ word: '残念', reading: 'ざんねん', meaning: 'unfortunate' },
		{ word: '嬉しい', reading: 'うれしい', meaning: 'happy' },
		{ word: '悲しい', reading: 'かなしい', meaning: 'sad' },

		// ===== Daily actions & situations =====
		{ word: '準備', reading: 'じゅんび', meaning: 'preparation' },
		{ word: '確認', reading: 'かくにん', meaning: 'confirmation, check' },
		{ word: '連絡', reading: 'れんらく', meaning: 'contact, communication' },
		{ word: '相談', reading: 'そうだん', meaning: 'consultation, discussion' },
		{ word: '説明', reading: 'せつめい', meaning: 'explanation' },

		// ===== Verbs =====
		{ word: '間違える', reading: 'まちがえる', meaning: 'to make a mistake' },
		{ word: '覚える', reading: 'おぼえる', meaning: 'to remember, memorize' },
		{ word: '忘れる', reading: 'わすれる', meaning: 'to forget' },
		{ word: '送る', reading: 'おくる', meaning: 'to send' },
		{ word: '迎える', reading: 'むかえる', meaning: 'to welcome, pick up' },

		// ===== Adjectives & states =====
		{ word: '忙しい', reading: 'いそがしい', meaning: 'busy' },
		{ word: '眠い', reading: 'ねむい', meaning: 'sleepy' },
		{ word: '痛い', reading: 'いたい', meaning: 'painful' },
		{ word: '危ない', reading: 'あぶない', meaning: 'dangerous' },
		{ word: '安心する', reading: 'あんしんする', meaning: 'to feel relieved' },

		// ===== Places & things =====
		{ word: '会議', reading: 'かいぎ', meaning: 'meeting' },
		{ word: '予定表', reading: 'よていひょう', meaning: 'schedule' },
		{ word: '荷物', reading: 'にもつ', meaning: 'luggage' },
		{ word: '鍵', reading: 'かぎ', meaning: 'key' },
		{ word: '経験', reading: 'けいけん', meaning: 'experience' }
	];

	let items = 20;
	let currentPage = 1;
	$: totalPages = Math.ceil(vocabulary.length / items);
	$: paginatedVocab = vocabulary.slice((currentPage - 1) * items, currentPage * items);

	function nextPage() {
		if (currentPage < totalPages) currentPage++;
	}

	function prevPage() {
		if (currentPage > 1) currentPage--;
	}
</script>

<section class="vocab-page">
	<h1>JLPT N4 Vocabulary</h1>
	<div class="vocab-grid">
		{#each paginatedVocab as item(item.word)}
			<div class="cell" tabindex="0">
				<span class="word">{item.word}</span>
				<span class="reading">{item.reading}</span>
				<span class="meaning">{item.meaning}</span>
			</div>
		{/each}
	</div>

	<!--PAGINATION-->
	<div class="pagination">
		<button onclick={prevPage} disabled={currentPage === 1}>Prev</button>
		<span>Page {currentPage} / {totalPages}</span>
		<button onclick={nextPage} disabled={currentPage === totalPages}>Next</button>
	</div>
</section>