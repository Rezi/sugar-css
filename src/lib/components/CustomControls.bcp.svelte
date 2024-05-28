<script lang="ts">
	import { browser } from '$app/environment';
	import {
		customizationStore,
		customizationThemeStore,
		baseCustomizationValues,
		initialCustomizationStoreValue,
		initialCustomizationThemeStoreValue,
		customizedCssVariables,
		customizationLoadedStore,
		type Theme,
		type RangeType
	} from '$lib/stores';
	import { onMount } from 'svelte';

	const rangeMax = 100;
	const rangeMin = 0;

	let activeTheme: Theme;

	onMount(() => {
		// toggle theme back and forth to populate both theme css variables
		toggleThemeAndBack();
	});

	$: {
		browser &&
			($customizationStore.isDarkTheme
				? document.body.classList.add('s-dark')
				: document.body.classList.remove('s-dark'));
	}

	$: activeTheme = $customizationStore.isDarkTheme ? 'dark' : 'light';

	const rangeLimitsByType: Record<RangeType, { min: number; max: number }> = {
		roundness: { min: 0, max: 4.5 },
		sparsity: { min: 0.3, max: 2 },
		fatness: { min: 0, max: 1 },
		shadow: { min: 0, max: 2 }
	};

	const fontFamilies = [
		{ title: 'System UI', value: 'system-ui' },
		{ title: 'Transitional', value: "Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif" },
		{
			title: 'Old Style',
			value: "'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif"
		},
		{
			title: 'Humanist',
			value:
				"Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif"
		},
		{
			title: 'Geometric Humanist',
			value: "Avenir, Montserrat, Corbel, 'URW Gothic', source-sans-pro, sans-serif"
		},
		{
			title: 'Classical Humanist',
			value: "Optima, Candara, 'Noto Sans', source-sans-pro, sans-serif"
		},
		{
			title: 'Neo-Grotesque',
			value: "Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif"
		},
		{ title: 'Monospace Slab Serif', value: "'Nimbus Mono PS', 'Courier New', monospace" },
		{
			title: 'Monospace Code',
			value:
				"ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace"
		},
		{
			title: 'Industrial',
			value:
				"Bahnschrift, 'DIN Alternate', 'Franklin Gothic Medium', 'Nimbus Sans Narrow', sans-serif-condensed, sans-serif"
		},
		{
			title: 'Rounded Sans',
			value:
				"ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif"
		},
		{
			title: 'Slab Serif',
			value: "Rockwell, 'Rockwell Nova', 'Roboto Slab', 'DejaVu Serif', 'Sitka Small', serif"
		},
		{
			title: 'Antique',
			value:
				"Superclarendon, 'Bookman Old Style', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', Georgia, serif"
		},
		{
			title: 'Didone',
			value: "Didot, 'Bodoni MT', 'Noto Serif Display', 'URW Palladio L', P052, Sylfaen, serif"
		},
		{
			title: 'Handwritten',
			value: "'Segoe Print', 'Bradley Hand', Chilanka, TSCu_Comic, casual, cursive"
		}
	];

	let rangeRoundnessValue = getRangeFromValue(Number($customizationStore.roundness), 'roundness');
	let rangeSparsityValue = getRangeFromValue(Number($customizationStore.sparsity), 'sparsity');
	let rangeFatnessValue = getRangeFromValue(Number($customizationStore.fatness), 'fatness');
	let rangeShadowValue = getRangeFromValue(Number($customizationStore.shadow), 'shadow');
	let fontFamilyValue = $customizationStore.fontFamily;

	function toggleThemeAndBack() {
		setTimeout(() => {
			$customizationStore.isDarkTheme = !$customizationStore.isDarkTheme;
			setTimeout(() => {
				$customizationStore.isDarkTheme = !$customizationStore.isDarkTheme;
				$customizationLoadedStore = true;
			});
		});
	}

	function getValueFromRange(rangeValue: number, rangeType: RangeType) {
		return (
			(rangeValue / (rangeMax - rangeMin)) *
				(rangeLimitsByType[rangeType].max - rangeLimitsByType[rangeType].min) +
			rangeLimitsByType[rangeType].min
		);
	}

	function getRangeFromValue(value: number, rangeType: RangeType) {
		return (
			((value - rangeLimitsByType[rangeType].min) /
				(rangeLimitsByType[rangeType].max - rangeLimitsByType[rangeType].min)) *
			(rangeMax - rangeMin)
		);
	}

	function reset() {
		$customizationStore = { ...initialCustomizationStoreValue };
		$customizationThemeStore = {
			light: { ...initialCustomizationThemeStoreValue.light },
			dark: { ...initialCustomizationThemeStoreValue.dark }
		};
		rangeRoundnessValue = getRangeFromValue(baseCustomizationValues.roundness, 'roundness');
		rangeSparsityValue = getRangeFromValue(baseCustomizationValues.sparsity, 'sparsity');
		rangeFatnessValue = getRangeFromValue(baseCustomizationValues.fatness, 'fatness');
		rangeShadowValue = getRangeFromValue(baseCustomizationValues.shadow, 'shadow');
		fontFamilyValue = baseCustomizationValues.fontFamily;

		$customizedCssVariables = {};
		$customizationLoadedStore = false;
		toggleThemeAndBack();
	}

	function setToStore(value: number, rangeType: RangeType) {
		$customizationStore[rangeType] = getValueFromRange(value, rangeType);
	}

	const themedPropNameMap: Record<Theme, { [key: string]: string }> = {
		dark: {
			['--s-color-bg']: '--s-color-dark-theme-bg',
			['--s-color-fg']: '--s-color-dark-theme-fg',
			['--s-color-primary']: '--s-color-dark-theme-primary',
			['--s-color-primary-contrast']: '--s-color-dark-theme-primary-contrast'
		},
		light: {
			['--s-color-bg']: '--s-color-light-theme-bg',
			['--s-color-fg']: '--s-color-light-theme-fg',
			['--s-color-primary']: '--s-color-light-theme-primary',
			['--s-color-primary-contrast']: '--s-color-light-theme-primary-contrast'
		}
	};

	function setCustomProperty(propName: string, value: string, theme?: Theme) {
		if (theme) {
			propName = themedPropNameMap[theme][propName];
		}
		browser && document.documentElement.style.setProperty(propName, value);
		$customizedCssVariables[propName] = value;
	}

	$: setToStore(rangeRoundnessValue, 'roundness');
	$: setToStore(rangeSparsityValue, 'sparsity');
	$: setToStore(rangeFatnessValue, 'fatness');
	$: setToStore(rangeShadowValue, 'shadow');
	$: $customizationStore.fontFamily = fontFamilyValue;

	$: setCustomProperty('--s-multiplier-rounded', $customizationStore.roundness.toString());
	$: setCustomProperty('--s-multiplier-sparsity', $customizationStore.sparsity.toString());
	$: setCustomProperty('--s-multiplier-fatness', $customizationStore.fatness.toString());
	$: setCustomProperty('--s-multiplier-shadow', $customizationStore.shadow.toString());
	$: setCustomProperty('--font-family', $customizationStore.fontFamily);
	$: setCustomProperty(
		'--s-color-primary',
		$customizationThemeStore[activeTheme].primaryColor.toString(),
		activeTheme
	);
	$: setCustomProperty(
		'--s-color-primary-contrast',
		$customizationThemeStore[activeTheme]['primary-contrast'].toString(),
		activeTheme
	);

	$: setCustomProperty(
		'--s-color-bg',
		$customizationThemeStore[activeTheme].bgColor.toString(),
		activeTheme
	);
	$: setCustomProperty(
		'--s-color-fg',
		$customizationThemeStore[activeTheme].fgColor.toString(),
		activeTheme
	);
</script>

<div class="controls">
	<div class="s-grid" style="--span:8; --gap:0.5rem;">
		<div>
			<fieldset>
				<legend>Theme: {activeTheme}</legend>
				<div class="theme-headline">
					<div class="colors-wrapper">
						<div
							class="color-example"
							style="background-color: {$customizationThemeStore['light']
								.bgColor}; color: {$customizationThemeStore['light'].fgColor}"
						>
							L
						</div>
						<div
							class="color-example"
							style="background-color: {$customizationThemeStore['light']
								.primaryColor}; color: {$customizationThemeStore['light']['primary-contrast']}"
						>
							L
						</div>
					</div>
					<input
						type="checkbox"
						role="switch"
						class="theme-switch"
						bind:checked={$customizationStore.isDarkTheme}
					/>
					<div class="colors-wrapper">
						<div
							class="color-example"
							style="background-color: {$customizationThemeStore['dark']
								.bgColor}; color: {$customizationThemeStore['dark'].fgColor}"
						>
							D
						</div>
						<div
							class="color-example"
							style="background-color: {$customizationThemeStore['dark']
								.primaryColor}; color: {$customizationThemeStore['dark']['primary-contrast']}"
						>
							D
						</div>
					</div>
				</div>

				<div class="s-grid">
					<div>
						<label>
							Foreground<small> {$customizationThemeStore[activeTheme].fgColor}</small>
							<input type="color" bind:value={$customizationThemeStore[activeTheme].fgColor} />
						</label>
						<label>
							Background<small> {$customizationThemeStore[activeTheme].bgColor}</small>
							<input type="color" bind:value={$customizationThemeStore[activeTheme].bgColor} />
						</label>
					</div>

					<div>
						<label>
							Primary <small>{$customizationThemeStore[activeTheme].primaryColor}</small>
							<input type="color" bind:value={$customizationThemeStore[activeTheme].primaryColor} />
						</label>

						<label
							>Contrast <small>{$customizationThemeStore[activeTheme]['primary-contrast']}</small
							><input
								type="color"
								bind:value={$customizationThemeStore[activeTheme]['primary-contrast']}
							/></label
						>
					</div>
				</div>
			</fieldset>

			<label>
				Roundness: {Number($customizationStore.roundness).toFixed(2)}
				<input type="range" min={rangeMin} max={rangeMax} bind:value={rangeRoundnessValue} />
			</label>
			<label>
				Sparsity: {Number($customizationStore.sparsity).toFixed(2)}
				<input type="range" min={rangeMin} max={rangeMax} bind:value={rangeSparsityValue} />
			</label>
			<label>
				Fatness: {Number($customizationStore.fatness).toFixed(2)}
				<input type="range" min={rangeMin} max={rangeMax} bind:value={rangeFatnessValue} />
			</label>
			<label>
				Shadow: {Number($customizationStore.shadow).toFixed(2)}
				<input type="range" min={rangeMin} max={rangeMax} bind:value={rangeShadowValue} />
			</label>
			<label>
				Font Family <a target="_blank" href="https://modernfontstacks.com/?stack=system-ui"
					>(more on fonts)</a
				>
				<select name="" id="" bind:value={fontFamilyValue}>
					{#each fontFamilies as ff}
						<option value={ff.value}>{ff.title}</option>
					{/each}
				</select>
			</label>

			<div>
				<button on:click={reset}>Reset</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	small {
		display: block;
	}
	.controls {
		position: sticky;
		top: 5.5rem;
		z-index: 2;
	}

	.theme-headline {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: var(--s-gap-default);
	}

	.colors-wrapper {
		display: flex;
	}
	.color-example {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--s-color-fg);
	}

	.theme-switch {
		margin: 0;
		--dot-gap: 0.25rem;
	}

	/* .theme-switch::before {
		transition: all 0.3s;
		outline: 2px dotted var(--s-color-primary);
	} */
	.theme-switch::before {
		--sun-color: rgb(255, 174, 0);
		background-color: var(--sun-color);
		transition: all 0.3s;
		outline: 2px dotted var(--sun-color);
	}

	.theme-switch:checked::before {
		background-color: transparent;
		box-shadow: calc(var(--dot-size) * -0.375) 0 0 0 var(--s-color-primary-contrast);
		left: calc(var(--dot-size) * 0.375);
		outline: none;
	}

	fieldset {
		padding: 0.75rem;
	}
</style>
