<script lang="ts">
	import { customizedCssVariables, customizationHash } from '$lib/stores';

	import CSSvariables from '$lib/scss/variables.scss?inline';
	import CSScolors from '$lib/scss/colors.scss?inline';
	import CSScore from '$lib/scss/core.scss?inline';

	import CSSfonts from '$lib/scss/fonts.scss?inline';
	import CSSheadlines from '$lib/scss/headlines.scss?inline';
	import CSSreducedMotion from '$lib/scss/reduced-motion.scss?inline';
	import CSStable from '$lib/scss/table.scss?inline';
	import CSStextInline from '$lib/scss/text-inline.scss?inline';
	import CSSgrid from '$lib/scss/grid.scss?inline';
	import CSScard from '$lib/scss/card.scss?inline';
	import CSSlayout from '$lib/scss/layout.scss?inline';
	import CSSmargins from '$lib/scss/margins.scss?inline';
	import CSSforms from '$lib/scss/forms.scss?inline';
	import CSSlists from '$lib/scss/lists.scss?inline';
	import CSSblockquote from '$lib/scss/blockquote.scss?inline';
	import CSSfigure from '$lib/scss/figure.scss?inline';
	import CSShr from '$lib/scss/hr.scss?inline';
	import CSSaccordion from '$lib/scss/accordion.scss?inline'; // needs card
	import CSSnavigation from '$lib/scss/navigation.scss?inline';
	import CSSdialog from '$lib/scss/dialog.scss?inline'; // needs card
	import CSSloader from '$lib/scss/loader.scss?inline';
	import CSStooltip from '$lib/scss/tooltip.scss?inline';

	let cssParts: string[] = ['core'];

	const cssPartsMap: Record<string, { css: string[]; require?: string }> = {
		core: { css: [/* CSSvariables, CSScolors, */ CSScore] }, // CSSvariables, CSScolors added when downloaded
		fonts: { css: [CSSfonts] },
		reducedMotion: { css: [CSSreducedMotion] },
		headlines: { css: [CSSheadlines] },
		table: { css: [CSStable] },
		textInline: { css: [CSStextInline] },
		grid: { css: [CSSgrid] },
		card: { css: [CSScard] },
		layout: { css: [CSSlayout] },
		margins: { css: [CSSmargins] },
		forms: { css: [CSSforms] },
		lists: { css: [CSSlists] },
		blockquote: { css: [CSSblockquote] },
		figure: { css: [CSSfigure] },
		hr: { css: [CSShr] },
		accordion: { css: [CSSaccordion], require: 'card' },
		navigation: { css: [CSSnavigation] },
		dialog: { css: [CSSdialog], require: 'card' },
		loader: { css: [CSSloader] },
		tooltip: { css: [CSStooltip] }
	};

	let includeCustomColors = true;

	let checkedAll = false;
	$: {
		if (checkedAll) {
			cssParts = Object.keys(cssPartsMap);
		} else {
			cssParts = ['core'];
		}
	}

	$: {
		cssParts.forEach((key) => {
			const requiredKey = cssPartsMap[key].require;
			if (requiredKey && !cssParts.includes(requiredKey)) {
				cssParts.push(requiredKey);
			}
		});
	}

	function triggerDownload() {
		if (includeCustomColors) {
			const CssWithVariables = customizeCss(CSSvariables + CSScolors);
			download(CssWithVariables);
		} else {
			download(CSSvariables + CSScolors);
		}
	}

	function download(CssWithVariables: string) {
		const CSSstylesHeader = `/*

SUGAR.CSS

Your can visit: 
https://sugar-css.com/customize?seed=${$customizationHash}
in order to modify this specific build of sugar.css.
*/
        
        `;

		const stylesToDownload = cssParts
			.flatMap((key) => {
				return cssPartsMap[key].css;
			})
			.join('');

		const blob = new Blob([CSSstylesHeader + CssWithVariables + stylesToDownload]);
		const a = document.createElement('a');
		document.body.append(a);
		a.download = 'sugar.css';
		a.href = URL.createObjectURL(blob);
		a.click();
		a.remove();
	}

	function customizeCss(cssToModify: string): string {
		return Object.entries($customizedCssVariables).reduce((acc, [key, value]) => {
			const replaceRegex = new RegExp(`${key}:.*?$`, 'gm');
			return acc.replace(replaceRegex, `${key}:${value};`);
		}, cssToModify);
	}
</script>

<section class="s-grid" style="--span:3;">
	<div>
		<label><input bind:group={cssParts} value="core" type="checkbox" checked disabled /> Core</label
		>
		<label><input bind:group={cssParts} value="fonts" type="checkbox" /> Fonts</label>
		<label
			><input bind:group={cssParts} value="reducedMotion" type="checkbox" /> Reduced motion</label
		>
		<label><input bind:group={cssParts} value="headlines" type="checkbox" /> Headlines</label>
		<label><input bind:group={cssParts} value="table" type="checkbox" /> Table</label>
		<label
			><input bind:group={cssParts} value="textInline" type="checkbox" /> Inline (text) elements</label
		>
		<label><input bind:group={cssParts} value="grid" type="checkbox" /> Grid</label>
		<label><input bind:group={cssParts} value="card" type="checkbox" /> Card (article)</label>
		<label
			><input bind:group={cssParts} value="layout" type="checkbox" /> Layout (body > header, footer,
			.s-container)</label
		>
		<label><input bind:group={cssParts} value="margins" type="checkbox" /> Margins</label>
		<label
			><input bind:group={cssParts} value="forms" type="checkbox" /> Forms (inputs, buttons)</label
		>
		<label><input bind:group={cssParts} value="lists" type="checkbox" /> Lists</label>
		<label><input bind:group={cssParts} value="blockquote" type="checkbox" /> Blockquote</label>
		<label><input bind:group={cssParts} value="figure" type="checkbox" /> Figure</label>
		<label><input bind:group={cssParts} value="hr" type="checkbox" /> Horizontal rule</label>
		<label><input bind:group={cssParts} value="accordion" type="checkbox" /> Accordion</label>
		<label><input bind:group={cssParts} value="navigation" type="checkbox" /> Navigation</label>
		<label><input bind:group={cssParts} value="dialog" type="checkbox" /> Dialog</label>
		<label><input bind:group={cssParts} value="loader" type="checkbox" /> Loader</label>
		<label><input bind:group={cssParts} value="tooltip" type="checkbox" /> Tooltip</label>
	</div>
</section>
<section>
	<label><input bind:checked={checkedAll} type="checkbox" /> <strong>Select All</strong></label>
</section>
<hr />
<section class="s-grid" style="--span:3;">
	<div>
		<label>
			<input type="checkbox" bind:checked={includeCustomColors} />Include custom colors and settings</label
		>

		<div><button on:click={triggerDownload}>Download</button></div>
	</div>
</section>
