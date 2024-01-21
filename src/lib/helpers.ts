import {
	customizationStore,
	customizationThemeStore,
	type CustomizationBaseStore,
	type CustomizationThemeStore
} from '$lib/stores';
import { derived, get } from 'svelte/store';

const combinedCustomizationStores = derived(
	[customizationStore, customizationThemeStore],
	([base, theme]) => [base, theme]
);

export function hashToStore(hash: string, onSuccess?: () => void, onFail?: () => void) {
	try {
		const decoded = atob(hash);
		const { base, theme }: { base: CustomizationBaseStore; theme: CustomizationThemeStore } =
			JSON.parse(decoded);
		const [baseOriginal, themeOriginal] = get(combinedCustomizationStores);
		customizationStore.set({ ...baseOriginal, ...base });
		customizationThemeStore.set({ ...themeOriginal, ...theme });

		onSuccess?.();
	} catch (err) {
		onFail?.();
	}
}
