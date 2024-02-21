<script lang="ts">
	import { browser } from '$app/environment';
	import { parse, mix, ColorSpace, sRGB, serialize, contrast } from 'colorjs.io/fn';
	import {
		customizationStore,
		customizationThemeStore,
		type CustomizationBaseStore,
		type CustomizationThemeStore
	} from '$lib/stores';

	type ColorConstructor = ReturnType<typeof parse>;
	type PlainColorObject = ReturnType<typeof mix>;

	type ColorMixKey =
		| 'bg-95-fg'
		| 'bg-85-fg'
		| 'fg-65-bg'
		| 'primary-80-fg'
		| 'primary-40-bg'
		| 'shadow'
		| 'shadow-half'
		| 'bg-85-fg-primary';

	type ColorMixDetail = {
		a: ColorConstructor | ColorMixKey;
		b: ColorConstructor;
		ratio: number;
		result?: PlainColorObject;
		description: string;
	};

	type ColorMixes = Record<ColorMixKey, ColorMixDetail>;

	type BaseColorsKey = 'fg' | 'bg' | 'primary' | 'primary-contrast';
	type ColorKey = BaseColorsKey | ColorMixKey;
	type BaseColors = Record<
		ColorKey,
		{ description: string; result: ColorConstructor } | ColorMixDetail
	>;

	ColorSpace.register(sRGB);

	let lightMixes: ColorMixes;
	let darkMixes: ColorMixes;

	let lightTheme: BaseColors;
	let darkTheme: BaseColors;

	const colorContrasts: { bg: ColorKey; fg: ColorKey }[] = [
		{ bg: 'bg', fg: 'fg' },
		{ bg: 'bg', fg: 'primary' },
		{ bg: 'bg', fg: 'fg-65-bg' },
		{ bg: 'primary', fg: 'primary-contrast' }
	];

	let lightColorContrasts: { bg: ColorKey; fg: ColorKey; result: number }[] = [];
	let darkColorContrasts: { bg: ColorKey; fg: ColorKey; result: number }[] = [];

	$: activeTheme = $customizationStore.isDarkTheme ? 'dark' : 'light';
	$: getResults($customizationStore, $customizationThemeStore);

	function getContrastValue(val: number) {
		let res = val.toFixed(1);
		if (Number(val.toFixed(1)) < 7) {
			res += '!';
		}
		if (Number(val.toFixed(1)) < 3.5) {
			res += '!';
		}
		return res;
	}
	function getColorMixes(
		themeBg: ColorConstructor,
		themeFg: ColorConstructor,
		colorPrimary: ColorConstructor
	): ColorMixes {
		let colorMixes: ColorMixes = {
			'bg-95-fg': {
				a: themeBg,
				b: themeFg,
				ratio: 0.95,
				result: undefined,
				description: 'Low contrast background'
			},
			'bg-85-fg': {
				a: themeBg,
				b: themeFg,
				ratio: 0.85,
				result: undefined,
				description: 'Mid contrast background'
			},
			'fg-65-bg': {
				a: themeFg,
				b: themeBg,
				ratio: 0.65,
				result: undefined,
				description: 'Low contrast text color'
			},
			'primary-80-fg': {
				a: colorPrimary,
				b: themeFg,
				ratio: 0.8,
				result: undefined,
				description: 'Text and border color with mixed primary'
			},
			'primary-40-bg': {
				a: colorPrimary,
				b: themeBg,
				ratio: 0.4,
				result: undefined,
				description: 'Background with mixed primary used for text highlights'
			},

			shadow: {
				a: themeFg,
				b: themeBg,
				ratio: 0.6,
				result: undefined,
				description: 'Shadow color used for article'
			},
			'shadow-half': {
				a: themeFg,
				b: themeBg,
				ratio: 0.6,
				result: undefined,
				description: `Shadow color used for body's <code>header</code> and <code>footer</code>`
			},
			'bg-85-fg-primary': {
				a: 'bg-85-fg',
				b: colorPrimary,
				ratio: 0.95,
				result: undefined,
				description:
					'Mixture of bg, fg and primary used for <code>code</code>, <code>kbd</code>, <code>samp</code> and various <code>input</code> elements'
			}
		};

		Object.entries(colorMixes).forEach((entry) => {
			const key = entry[0] as ColorMixKey;
			const value = entry[1];

			if (typeof value.a !== 'string') {
				(colorMixes[key] as ColorMixDetail).result = mix(value.b, value.a, value.ratio, {
					space: 'srgb',
					outputSpace: 'srgb'
				});
			} else {
				(colorMixes[key] as ColorMixDetail).result = mix(
					value.b,
					colorMixes[value.a].result as PlainColorObject,
					value.ratio,
					{
						space: 'srgb',
						outputSpace: 'srgb'
					}
				);
			}
		});

		return colorMixes;
	}

	function getResults(
		customization: CustomizationBaseStore,
		customizationTheme: CustomizationThemeStore
	) {
		let colorLightBg = parse(customizationTheme.light.bgColor);
		let colorLightFg = parse(customizationTheme.light.fgColor);
		let colorDarkBg = parse(customizationTheme.dark.bgColor);
		let colorDarkFg = parse(customizationTheme.dark.fgColor);
		let colorLightPrimary = parse(customizationTheme.light.primaryColor);
		let colorLightPrimaryContrast = parse(customizationTheme.light['primary-contrast']);
		let colorDarkPrimary = parse(customizationTheme.dark.primaryColor);
		let colorDarkPrimaryContrast = parse(customizationTheme.dark['primary-contrast']);

		lightMixes = getColorMixes(colorLightBg, colorLightFg, colorLightPrimary);
		darkMixes = getColorMixes(colorDarkBg, colorDarkFg, colorDarkPrimary);

		lightTheme = {
			...lightMixes,
			primary: { description: 'Primary theme color', result: colorLightPrimary },
			'primary-contrast': {
				description: 'Primary theme contrast color',
				result: colorLightPrimaryContrast
			},
			fg: { description: 'Base Foreground color', result: colorLightFg },
			bg: { description: 'Base Background color', result: colorLightBg }
		};
		darkTheme = {
			...darkMixes,
			primary: { description: 'Primary theme color', result: colorDarkPrimary },
			'primary-contrast': {
				description: 'Primary theme contrast color',
				result: colorDarkPrimaryContrast
			},
			fg: { description: 'Base Foreground color', result: colorDarkFg },
			bg: { description: 'Base Background color', result: colorDarkBg }
		};

		darkColorContrasts = colorContrasts.map((def) => {
			return {
				...def,
				result: contrast(
					darkTheme[def.bg].result as ColorConstructor,
					darkTheme[def.fg].result as ColorConstructor,
					'WCAG21'
				)
			};
		});
		lightColorContrasts = colorContrasts.map((def) => {
			return {
				...def,
				result: contrast(
					lightTheme[def.bg].result as ColorConstructor,
					lightTheme[def.fg].result as ColorConstructor,
					'WCAG21'
				)
			};
		});
	}
</script>

{#if activeTheme === 'light'}
	<details>
		<summary
			><strong>Contrasts WCAG</strong>
			{#each Object.values(lightColorContrasts) as contrast}<span
					>{getContrastValue(contrast.result)}
				</span>{/each}
		</summary>

		<div>
			<h3>Contrasts</h3>
			<table>
				<tbody>
					{#each Object.values(lightColorContrasts) as contrast}
						<tr>
							<td>
								<div
									class="color-square outer"
									style="background-color:{serialize(lightTheme[contrast.bg].result || '')}"
								>
									<div
										class="color-square inner"
										style="background-color:{serialize(lightTheme[contrast.fg].result || '')}"
									></div>
								</div>
							</td><td>
								<div>--s-color-{contrast.bg}</div>
								<div>--s-color-{contrast.fg}</div>
							</td>
							<td>WCAG 2.1 Result: <strong>{Number(contrast.result.toFixed(1))}</strong></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</details>

	<details>
		<summary><strong>Color palette</strong> </summary>

		<div>
			<h3>Colors</h3>
			<section>
				<dl style="--dl-width: 16rem; --dd-min-width: 50%">
					{#each Object.entries(lightMixes) as [key, mix]}
						<dt>
							<div
								class="color-square"
								style="background-color:{mix.result ? serialize(mix.result) : ''}"
							></div>
							<strong>{`--s-color-${key}`}</strong>
						</dt>
						<dd>{@html mix.description}</dd>
					{/each}
				</dl>
			</section>
		</div>
	</details>
{/if}
{#if activeTheme === 'dark'}
	<details>
		<summary
			><strong>Contrasts WCAG</strong>
			{#each Object.values(darkColorContrasts) as contrast}<span
					>{getContrastValue(contrast.result)}</span
				>{/each}</summary
		>
		<div>
			<h3>Contrasts</h3>
			<table>
				<tbody>
					{#each Object.values(darkColorContrasts) as contrast}
						<tr>
							<td>
								<div
									class="color-square outer"
									style="background-color:{serialize(darkTheme[contrast.bg].result || '')}"
								>
									<div
										class="color-square inner"
										style="background-color:{serialize(darkTheme[contrast.fg].result || '')}"
									></div>
								</div>
							</td><td>
								<div>--s-color-{contrast.bg}</div>
								<div>--s-color-{contrast.fg}</div>
							</td>
							<td>WCAG 2.1 Result: <strong>{Number(contrast.result.toFixed(1))}</strong></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</details>

	<details>
		<summary><strong>Color palette</strong></summary>
		<div>
			<h3>Colors</h3>
			<section>
				<dl style="--dl-width: 16rem; --dd-min-width: 50%">
					{#each Object.entries(darkMixes) as [key, mix]}
						<dt>
							<div
								class="color-square"
								style="background-color:{mix.result ? serialize(mix.result) : ''}"
							></div>
							<strong>{`--s-color-${key}`}</strong>
						</dt>
						<dd>{@html mix.description}</dd>
					{/each}
				</dl>
			</section>
		</div>
	</details>
{/if}

<style lang="scss">
	.color-square {
		aspect-ratio: 1 / 1;
		height: 2rem;
		flex-shrink: 0;

		&.outer {
			height: 4rem;
			border: 1px solid var(--s-color-fg);
			display: grid;
			place-content: center;
		}
	}

	dt {
		display: flex;
		gap: var(--s-gap-default);
	}
</style>
