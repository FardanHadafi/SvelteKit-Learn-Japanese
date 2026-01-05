export type Katakana = {
	char: string;
	romaji: string;
	type: 'basic' | 'dakuten' | 'handakuten';
};


export const katakana: Katakana[] = [
	// Basic
	{ char: 'ア', romaji: 'a', type: 'basic' },
	{ char: 'イ', romaji: 'i', type: 'basic' },
	{ char: 'ウ', romaji: 'u', type: 'basic' },
	{ char: 'エ', romaji: 'e', type: 'basic' },
	{ char: 'オ', romaji: 'o', type: 'basic' },

	{ char: 'カ', romaji: 'ka', type: 'basic' },
	{ char: 'サ', romaji: 'sa', type: 'basic' },
	{ char: 'タ', romaji: 'ta', type: 'basic' },
	{ char: 'ハ', romaji: 'ha', type: 'basic' },

	// Dakuten
	{ char: 'ガ', romaji: 'ga', type: 'dakuten' },
	{ char: 'ザ', romaji: 'za', type: 'dakuten' },
	{ char: 'ダ', romaji: 'da', type: 'dakuten' },
	{ char: 'バ', romaji: 'ba', type: 'dakuten' },

	// Handakuten
	{ char: 'パ', romaji: 'pa', type: 'handakuten' }
];