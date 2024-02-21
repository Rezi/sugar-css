<script lang="ts">
	import { browser } from '$app/environment';
	import { hashToStore } from '$lib/helpers';
	import {
		customizationStore,
		customizationThemeStore,
		customizationHash,
		type CustomizationBaseStore,
		type CustomizationThemeStore
	} from '$lib/stores';
	import { onMount } from 'svelte';

	let hash: string = btoa(JSON.stringify({ base: {}, theme: {} }));
	let error = false;
	let loadedFromUrl = true;

	const hasChangedDebounced = debounce(hashChanged, 200);

	$: onHashchange(hash);

	function onHashchange(hash: string) {
		loadedFromUrl &&
			hashToStore(
				hash,
				() => {
					error = false;

					hasChangedDebounced(hash);
				},
				() => {
					error = true;
				}
			);
	}

	$: onStoreChange($customizationStore, $customizationThemeStore);

	function onStoreChange(base: CustomizationBaseStore, theme: CustomizationThemeStore) {
		if (loadedFromUrl) {
			hash = btoa(JSON.stringify({ base, theme }));
			$customizationHash = hash;
			error = false;
			hasChangedDebounced(hash);
		}
	}

	function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
		let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

		return (...args: Parameters<T>) => {
			timeout && clearTimeout(timeout);

			timeout = setTimeout(() => {
				fn(...args);
			}, delay);
		};
	}

	function hashChanged(hash: string) {
		if (browser && 'URLSearchParams' in window) {
			const searchParams = new URLSearchParams(window.location.search);
			searchParams.set('seed', hash);
			const newRelativePathQuery = window.location.pathname + '?' + searchParams.toString();
			history.pushState(null, '', newRelativePathQuery);
		}
	}
</script>

<p>
	Following string (hash) is uniq for current custom settings. The hash will be also added to saved
	custom CSS. Later you can past your hash here and load your custom build.
</p>
<textarea bind:value={hash} aria-invalid={error}></textarea>
