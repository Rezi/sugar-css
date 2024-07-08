<script lang="ts">
	import { customizedCssVariables, customizationHash } from '$lib/stores';

	import CSSvariables from '$lib/scss/variables.scss?inline';
	import CSScolors from '$lib/scss/colors.scss?inline';
	import CSScore from '$lib/scss/core.scss?inline';
	import CSSfonts from '$lib/scss/fonts.scss?inline';
	import CSSfontSizing from '$lib/scss/font-sizing.scss?inline';
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
	import CSStabs from '$lib/scss/tabs.scss?inline';

	let cssParts: string[] = ['core'];

	const CSSlicense = `/* MIT License

Copyright (c) 2024 Tomáš Řezáč

https://github.com/Rezi/sugar-css

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */`;

	const cssPartsMap: Record<
		string,
		{
			css: string[];
			require?: string;
			name: string;
			checked: boolean;
			disabled: boolean;
			description: string;
		}
	> = {
		core: {
			css: [CSScore],
			name: 'Core',
			checked: true,
			disabled: true,
			description: 'Variables, colors, box-sizing, <code>body</code> base styles'
		}, // CSSvariables, CSScolors added when downloaded
		fontSizing: {
			css: [CSSfontSizing],
			name: 'Font sizing',
			checked: false,
			disabled: false,
			description: 'Font will grow up a bit with your screen'
		},
		fonts: {
			css: [CSSfonts],
			name: 'Fonts',
			checked: false,
			disabled: false,
			description: 'Monospace and system fonts cross browser compatibility'
		},
		reducedMotion: {
			css: [CSSreducedMotion],
			name: 'Reduced motion',
			checked: false,
			disabled: false,
			description: 'Reduced motion query for improved accessibility'
		},
		headlines: {
			css: [CSSheadlines],
			name: 'Headlines',
			checked: false,
			disabled: false,
			description: '<code>h1</code> - <code>h6</code>, <code>hgroup</code>'
		},
		table: {
			css: [CSStable],
			name: 'Table',
			checked: false,
			disabled: false,
			description: 'Base table styles'
		},
		textInline: {
			css: [CSStextInline],
			name: 'Inline elements',
			checked: false,
			disabled: false,
			description:
				'inline elements like <code>strong</code>, <code>i</code>, <code>a</code>, <code>em</code> and many others '
		},
		grid: {
			css: [CSSgrid],
			name: 'Grid',
			checked: false,
			disabled: false,
			description: 'Gris system based on css Grid'
		},
		card: {
			css: [CSScard],
			name: 'Card (article)',
			checked: false,
			disabled: false,
			description: 'Card like styling for an <code>article</code> element'
		},
		layout: {
			css: [CSSlayout],
			name: 'Layout',
			checked: false,
			disabled: false,
			description: '<code>(body > header, footer, .s-container)</code>'
		},
		margins: {
			css: [CSSmargins],
			name: 'Margins',
			checked: false,
			disabled: false,
			description:
				'Elements with margins has only margin bottom. Last element of parent has margin collapsed'
		},
		forms: {
			css: [CSSforms],
			name: 'Forms',
			checked: false,
			disabled: false,
			description: 'Inputs and buttons'
		},
		lists: {
			css: [CSSlists],
			name: 'Lists',
			checked: false,
			disabled: false,
			description: '<code>ol</code>, <code>ul</code> and <code>dl</code>'
		},
		blockquote: {
			css: [CSSblockquote],
			name: 'Blockquote',
			checked: false,
			disabled: false,
			description: 'Quotation block styling <code>blockquote</code>'
		},
		figure: {
			css: [CSSfigure],
			name: 'Figure',
			checked: false,
			disabled: false,
			description: 'Figure for images and diagrams'
		},
		hr: {
			css: [CSShr],
			name: 'Horizontal rule',
			checked: false,
			disabled: false,
			description: 'Horizontal rule with additional card support'
		},
		accordion: {
			css: [CSSaccordion],
			require: 'card',
			name: 'Accordion',
			checked: false,
			disabled: false,
			description: 'Several styles for various accordions'
		},
		dialog: {
			css: [CSSdialog],
			require: 'card',
			name: 'Dialog',
			checked: false,
			disabled: false,
			description: 'Dialog and modal styles'
		},
		navigation: {
			css: [CSSnavigation],
			name: 'Navigation',
			checked: false,
			disabled: false,
			description: 'Top navigation menu, aside navigation'
		},
		loader: {
			css: [CSSloader],
			name: 'Loader',
			checked: false,
			disabled: false,
			description: 'Loading indicator for buttons, blocks, links'
		},
		tooltip: {
			css: [CSStooltip],
			name: 'Tooltip',
			checked: false,
			disabled: false,
			description: 'Accessible tooltip with support for HTML like this one'
		},
		tabs: {
			css: [CSStabs],
			name: 'Tabs',
			checked: false,
			disabled: false,
			description: 'Accessible tabs'
		}
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
			const CssWithVariables = customizeCss(joinCSSParts([CSSvariables, CSScolors]));
			download(CssWithVariables);
		} else {
			download(joinCSSParts([CSSvariables, CSScolors]));
		}
	}

	function joinCSSParts(parts: string[]) {
		return parts.join(`

`);
	}

	function download(CssWithVariables: string) {
		const CSSstylesHeader = `/*

SUGAR.CSS

Your can visit: 
https://sugar-css.com/customize?seed=${$customizationHash}
in order to modify this specific build of sugar.css.
*/

`;

		const stylesToDownload = joinCSSParts(
			cssParts.flatMap((key) => {
				return cssPartsMap[key].css.map((cssString) => cssString.replace('@charset "UTF-8";', ''));
			})
		);

		console.log(CSSlicense);

		const blob = new Blob([
			joinCSSParts([CSSlicense, CSSstylesHeader, CssWithVariables, stylesToDownload])
		]);
		const a = document.createElement('a');
		document.body.append(a);
		a.download = 'sugar.css';
		a.href = URL.createObjectURL(blob);
		a.click();
		a.remove();
	}

	function customizeCss(cssToModify: string): string {
		return Object.entries($customizedCssVariables).reduce((acc, [key, value]) => {
			const replaceRegex = new RegExp(`${key}:.*?;`, 'gm');
			return acc.replace(replaceRegex, `${key}:${value};`);
		}, cssToModify);
	}
</script>

<section class="s-grid" style="--span:2;">
	<div>
		{#each Object.entries(cssPartsMap) as section}
			<label
				><input
					bind:group={cssParts}
					value={section[0]}
					type="checkbox"
					checked={section[1].checked}
					disabled={section[1].disabled}
					aria-describedby="{section[0]}-tooltip"
				/>
				{section[1].name}
				<span role="tooltip" id="{section[0]}-tooltip">
					{@html section[1].description}
				</span>
			</label>
		{/each}
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
