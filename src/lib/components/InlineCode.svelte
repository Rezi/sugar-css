<script context="module">
	import hljs from 'highlight.js/lib/core';
	import css from 'highlight.js/lib/languages/css';
	import xml from 'highlight.js/lib/languages/xml';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
</script>

<script lang="ts">
	export let code: string;
	export let language = 'xml';

	$: highlightedCode = hljs.highlight(code, {
		language
	}).value;
</script>

<code dir="ltr" class="hljs simple">{@html highlightedCode}</code>

<style type="scss">
	@import 'highlight.js/styles/arduino-light.css';

	.hljs {
		background-color: var(--s-color-bg-85-fg);
	}

	:global(.card-code.top) .hljs {
	}
</style>
