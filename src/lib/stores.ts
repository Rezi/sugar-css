import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export const dialogOpenedStore: Writable<boolean | undefined> = writable(undefined);
export const modalOpenedStore: Writable<boolean | undefined> = writable(undefined);

export type RangeType = 'roundness' | 'sparsity' | 'fatness' | 'shadow' | 'lineHeight';
export type Theme = 'light' | 'dark';
export type ThemeColors = {
	bgColor: string;
	fgColor: string;
	primaryColor: string;
	'primary-contrast': string;
};
export type PropertyType = RangeType | 'primaryColor' | 'primaryContrastColor' | 'isDarkTheme';
export type CustomizationThemeStore = Record<Theme, ThemeColors>;

export const baseCustomizationValues = {
	light: {
		baseFgColor: '#000000',
		baseBgColor: '#ffffff',
		primaryColor: '#b1024e',
		'primary-contrast': '#ffffff'
	},
	dark: {
		baseFgColor: '#ffffff',
		baseBgColor: '#1a1a1a',
		primaryColor: '#ff75b1',
		'primary-contrast': '#000000'
	},

	roundness: 1,
	sparsity: 1,
	fatness: 0,
	lineHeight: 1.6,
	shadow: 1,
	isDarkTheme: false,
	fontFamily: 'system-ui'
};

type CustomizationStore = typeof baseCustomizationValues;
export type CustomizationBaseStore = Omit<CustomizationStore, Theme>;
export type CustomizedCssVariables = { [key: string]: string };

export const initialCustomizationStoreValue = {
	roundness: baseCustomizationValues.roundness,
	lineHeight: baseCustomizationValues.lineHeight,
	sparsity: baseCustomizationValues.sparsity,
	fatness: baseCustomizationValues.fatness,
	shadow: baseCustomizationValues.shadow,
	fontFamily: baseCustomizationValues.fontFamily,
	isDarkTheme: baseCustomizationValues.isDarkTheme
};

export const initialCustomizationThemeStoreValue = {
	light: {
		bgColor: baseCustomizationValues.light.baseBgColor,
		fgColor: baseCustomizationValues.light.baseFgColor,
		primaryColor: baseCustomizationValues.light.primaryColor,
		'primary-contrast': baseCustomizationValues.light['primary-contrast']
	},
	dark: {
		bgColor: baseCustomizationValues.dark.baseBgColor,
		fgColor: baseCustomizationValues.dark.baseFgColor,
		primaryColor: baseCustomizationValues.dark.primaryColor,
		'primary-contrast': baseCustomizationValues.dark['primary-contrast']
	}
};

export const customizedCssVariables: Writable<CustomizedCssVariables> = writable({});

let hashFromUrl = '';
let baseFromUrl: Partial<CustomizationBaseStore> = {};
let themeFromUrl: Partial<CustomizationThemeStore> = {};

if (browser && 'URLSearchParams' in window && window.location.pathname === '/customize') {
	try {
		const searchParams = new URLSearchParams(window.location.search);
		hashFromUrl = searchParams.get('seed') || '';
		const decoded = atob(hashFromUrl);
		const { base, theme }: { base: CustomizationBaseStore; theme: CustomizationThemeStore } =
			JSON.parse(decoded);

		baseFromUrl = base || {};
		themeFromUrl = theme || {};
	} catch (e) {
		console.log(e);
	}
}

export const customizationHash: Writable<string> = writable(hashFromUrl);
export const customizationLoadedStore: Writable<boolean> = writable(false);

export const customizationStore: Writable<CustomizationBaseStore> = writable({
	...initialCustomizationStoreValue,
	...baseFromUrl
});
export const customizationThemeStore: Writable<CustomizationThemeStore> = writable({
	...{
		light: { ...initialCustomizationThemeStoreValue.light },
		dark: { ...initialCustomizationThemeStoreValue.dark }
	},
	...themeFromUrl
});
