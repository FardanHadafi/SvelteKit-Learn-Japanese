<script lang="ts">
	import "../../../lib/style/vocabN5.css"

	type VocabItem = {
		word: string;
		reading: string;
		meaning: string;
	}

	let vocabulary: VocabItem[] = [
		// ===== Pronouns =====
		{ word: '私', reading: 'わたし', meaning: 'I, me' },
		{ word: 'あなた', reading: 'あなた', meaning: 'you' },
		{ word: '人', reading: 'ひと', meaning: 'person' },
		{ word: '友だち', reading: 'ともだち', meaning: 'friend' },

		// ===== Numbers =====
		{ word: '一', reading: 'いち', meaning: 'one' },
		{ word: '二', reading: 'に', meaning: 'two' },
		{ word: '三', reading: 'さん', meaning: 'three' },
		{ word: '四', reading: 'よん', meaning: 'four' },
		{ word: '五', reading: 'ご', meaning: 'five' },
		{ word: '六', reading: 'ろく', meaning: 'six' },
		{ word: '七', reading: 'なな', meaning: 'seven' },
		{ word: '八', reading: 'はち', meaning: 'eight' },
		{ word: '九', reading: 'きゅう', meaning: 'nine' },
		{ word: '十', reading: 'じゅう', meaning: 'ten' },

		// ===== Time & Date =====
		{ word: '今日', reading: 'きょう', meaning: 'today' },
		{ word: '明日', reading: 'あした', meaning: 'tomorrow' },
		{ word: '昨日', reading: 'きのう', meaning: 'yesterday' },
		{ word: '今', reading: 'いま', meaning: 'now' },
		{ word: '朝', reading: 'あさ', meaning: 'morning' },
		{ word: '夜', reading: 'よる', meaning: 'night' },

		// ===== Verbs =====
		{ word: '行く', reading: 'いく', meaning: 'to go' },
		{ word: '来る', reading: 'くる', meaning: 'to come' },
		{ word: '帰る', reading: 'かえる', meaning: 'to return' },
		{ word: '食べる', reading: 'たべる', meaning: 'to eat' },
		{ word: '飲む', reading: 'のむ', meaning: 'to drink' },
		{ word: '見る', reading: 'みる', meaning: 'to see, watch' },
		{ word: '聞く', reading: 'きく', meaning: 'to listen, hear' },
		{ word: '話す', reading: 'はなす', meaning: 'to speak' },
		{ word: '読む', reading: 'よむ', meaning: 'to read' },
		{ word: '書く', reading: 'かく', meaning: 'to write' },
		{ word: '買う', reading: 'かう', meaning: 'to buy' },
		{ word: '行う', reading: 'おこなう', meaning: 'to do, carry out' },

		// ===== Adjectives =====
		{ word: '大きい', reading: 'おおきい', meaning: 'big' },
		{ word: '小さい', reading: 'ちいさい', meaning: 'small' },
		{ word: '新しい', reading: 'あたらしい', meaning: 'new' },
		{ word: '古い', reading: 'ふるい', meaning: 'old' },
		{ word: '高い', reading: 'たかい', meaning: 'expensive, tall' },
		{ word: '安い', reading: 'やすい', meaning: 'cheap' },
		{ word: '良い', reading: 'いい', meaning: 'good' },
		{ word: '悪い', reading: 'わるい', meaning: 'bad' },

		// ===== Places =====
		{ word: '日本', reading: 'にほん', meaning: 'Japan' },
		{ word: '学校', reading: 'がっこう', meaning: 'school' },
		{ word: '会社', reading: 'かいしゃ', meaning: 'company' },
		{ word: '家', reading: 'いえ', meaning: 'house, home' },
		{ word: '店', reading: 'みせ', meaning: 'shop' },
		{ word: '駅', reading: 'えき', meaning: 'station' },

		// ===== Food & Drink =====
		{ word: '水', reading: 'みず', meaning: 'water' },
		{ word: 'ご飯', reading: 'ごはん', meaning: 'rice, meal' },
		{ word: 'パン', reading: 'パン', meaning: 'bread' },
		{ word: '肉', reading: 'にく', meaning: 'meat' },
		{ word: '魚', reading: 'さかな', meaning: 'fish' },

		// ===== Common Expressions =====
		{ word: 'はい', reading: 'はい', meaning: 'yes' },
		{ word: 'いいえ', reading: 'いいえ', meaning: 'no' },
		{ word: 'ありがとう', reading: 'ありがとう', meaning: 'thank you' },
		{ word: 'すみません', reading: 'すみません', meaning: 'excuse me, sorry' },
		{ word: 'お願いします', reading: 'おねがいします', meaning: 'please' },

		// ===== Misc =====
		{ word: '何', reading: 'なに', meaning: 'what' },
		{ word: '誰', reading: 'だれ', meaning: 'who' },
		{ word: 'これ', reading: 'これ', meaning: 'this' },
		{ word: 'それ', reading: 'それ', meaning: 'that' },
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
	<h1>JLPT N5 Vocabulary</h1>
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
