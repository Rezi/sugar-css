<script context="module">
	import { browser } from '$app/environment';
	import hljs from 'highlight.js/lib/core';
	import css from 'highlight.js/lib/languages/css';
	import xml from 'highlight.js/lib/languages/xml';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
</script>

<script lang="ts">
	type PositionType = 'top' | 'bottom' | '';
	export let code: string;
	export let language = 'xml';
	export let card = true;
	export let resizable = false;
	export let showExample = true;
	export let iframe = false;
	export let examplePosition: PositionType = showExample ? 'bottom' : '';
	export let simple = false;
	export let withSlot = false;

	let exampleEl: HTMLElement;

	$: codeInCard = getCodeInCard(code, resizable, card, iframe);

	$: highlightedCode = hljs.highlight(code, {
		language
	}).value;

	function getCodeInCard(code: string, resizable: boolean, card: boolean, iframe: boolean) {
		if (card && !iframe) {
			return `<article class=${resizable ? 'resizable' : ''}>${code}</article>`;
		} else if (iframe && browser) {
			setTimeout(() => {
				prepareIframe(code);
			});
		} else {
			return code;
		}
	}

	function prepareIframe(code: string) {
		const iframe = document.createElement('iframe');
		const article = document.createElement('article');

		article.appendChild(iframe);

		iframe.style.width = '100%';
		iframe.style.height = '450px';
		exampleEl.innerHTML = '';
		article.style.backgroundColor = '#444';
		exampleEl.appendChild(article);

		iframe.contentDocument?.write(code);

		let link = document.createElement('link');

		// set the attributes for link element
		link.rel = 'stylesheet';

		link.type = 'text/css';

		link.href = '/sugar.min.css';

		// Get HTML head element to append
		// link element to it
		const iframeHead = iframe.contentDocument?.getElementsByTagName('head')[0];
		iframeHead?.appendChild(link);
	}
</script>

{#if simple}
	<pre dir="ltr" class="hljs simple">{@html highlightedCode}</pre>
{:else}
	<section class="card-code {examplePosition}">
		{#if language === 'xml' && showExample && examplePosition === 'top'}
			<div class="example-top" bind:this={exampleEl}>
				{#if withSlot}
					<article class={resizable ? 'resizable' : ''}>
						<slot />
					</article>
				{:else}
					{@html codeInCard}
				{/if}
			</div>
		{/if}

		<pre
			class="hljs"
			dir="ltr"
			style={language === 'xml' && showExample
				? `padding-${examplePosition}: calc(var(--sugar-spacing-block) * 1.5);`
				: ''}>{@html highlightedCode}</pre>

		{#if language === 'xml' && showExample && examplePosition === 'bottom'}
			<div class="example-bottom" bind:this={exampleEl}>
				{#if withSlot}
					<article class={resizable ? 'resizable' : ''}>
						<slot />
					</article>
				{:else}
					{@html codeInCard}
				{/if}
			</div>
		{/if}
	</section>
{/if}

<style type="scss">
	@import 'highlight.js/styles/atom-one-dark.css';

	.hljs {
		margin: 0 calc(-1 * var(--sugar-spacing-inline)) calc(-1 * var(--sugar-spacing-block));
		padding: var(--sugar-spacing-block) var(--sugar-spacing-inline);
		overflow-x: auto;
	}

	.simple {
		margin: 0;
		padding: 1rem;
	}

	::-webkit-scrollbar {
		height: 5px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #bcbcbc;
	}

	:global(article header + .card-code) .hljs {
		margin: calc(-1 * var(--sugar-spacing-block)) calc(-1 * var(--sugar-spacing-inline));
		padding: var(--sugar-spacing-block) var(--sugar-spacing-inline);
	}

	:global(.card-code) .hljs {
		margin-block: 0;
		margin-inline: calc(-1 * var(--sugar-spacing-inline));
		padding: var(--sugar-spacing-block) var(--sugar-spacing-inline);
	}

	:global(.card-code.top) .hljs,
	:global(.card-code:first-child) .hljs {
		margin-block-start: calc(-1 * var(--sugar-spacing-block));
	}
	:global(.card-code.bottom) .hljs,
	:global(.card-code:last-child) .hljs {
		margin-block-end: calc(-1 * var(--sugar-spacing-block));
	}

	:global(article .card-code:last-child:not(.bottom) .hljs) {
		border-bottom-left-radius: var(--s-block-radius);
		border-bottom-right-radius: var(--s-block-radius);
	}

	:global(.card-code table) {
		background-color: var(--s-color-bg);
	}

	:global(.card-code .resizable) {
		resize: horizontal;
		overflow: hidden;
		max-width: 100%;
		min-width: 11rem;
	}

	.example-top {
		margin-bottom: calc(-1 * var(--sugar-spacing-block));
	}

	.example-top,
	.example-bottom {
		position: relative;
		z-index: 2;
	}
</style>
