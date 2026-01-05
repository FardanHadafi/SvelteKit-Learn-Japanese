export type Hiragana = {
	char: string;
	romaji: string;
	type: 'basic' | 'dakuten' | 'handakuten';
};


export const hiragana: Hiragana[] = [
	// Basic
	{ char: 'あ', romaji: 'a', type: 'basic' },
	{ char: 'い', romaji: 'i', type: 'basic' },
	{ char: 'う', romaji: 'u', type: 'basic' },
	{ char: 'え', romaji: 'e', type: 'basic' },
	{ char: 'お', romaji: 'o', type: 'basic' },

	{ char: 'か', romaji: 'ka', type: 'basic' },
	{ char: 'さ', romaji: 'sa', type: 'basic' },
	{ char: 'た', romaji: 'ta', type: 'basic' },
	{ char: 'は', romaji: 'ha', type: 'basic' },

	// Dakuten
	{ char: 'が', romaji: 'ga', type: 'dakuten' },
	{ char: 'ざ', romaji: 'za', type: 'dakuten' },
	{ char: 'だ', romaji: 'da', type: 'dakuten' },
	{ char: 'ば', romaji: 'ba', type: 'dakuten' },

	// Handakuten
	{ char: 'ぱ', romaji: 'pa', type: 'handakuten' }
];