<script>
	import CardCode from '$lib/components/CardCode.svelte';
	const cdn = `<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/Rezi/sugar-css@main/dist/sugar.min.css"
/>`;
</script>

<h1>Getting started</h1>

<article>
	<h2>Install</h2>

	<p>There are several ways how to use Sugar.css in a project</p>

	<ul>
		<li>Customize online and <a href="/customize">download</a></li>
		<li>
			<code>npm install sugar-css-framework</code> and use
			<code>sugar-css-framework/dist/index.scss</code>
		</li>
		<li>
			Build via command line <code>npx sugar-css-framework</code> (this way grid column width can be
			modified)
		</li>
		<li>Download via cdn:</li>
	</ul>
	<CardCode code={cdn} showExample={false}></CardCode>
</article>

<article>
	<h2>Usage</h2>

	<h3>Browser Support</h3>
	<p>
		Sugar.css should be used with the most modern browsers. All features used by Sugar CSS have 90%
		+ support in the most recent versions of Chrome, Safari, Firefox and many Chromium-based
		browsers.
	</p>

	<p>
		These are the most recent CSS features used by Sugar.css:
		<code>:has(), :with(), aspect-ratio, color-mix(), @container queries, CSS grid</code>. Check on
		your own what is their current browser support.
	</p>

	<h3>Mindset</h3>
	<p>
		Sugar.css can be, with exceptions of following classes <code
			>.s-dark, .s-light, .s-outline, .s-secondary, .s-grid .s-fixed, .s-container</code
		>, considered as CSS reset. All styles applied by Sugar.css use :where() pseudo-selector, which
		does not add any specificity to its selector. This way user can overwrite any Sugar.css style
		without dealing with specificity issues. Also, there is no need to keep Sugar.css in a separate
		layer and write custom code in another.
	</p>
	<p>Sugar.css tries to be as simple as possible and keep its size down (8.4 kB minified).</p>

	<h3>Use cases</h3>
	<p>Sugar.css is suitable for projects where:</p>
	<ul>
		<li>Design is based on rules rather than feelings.</li>
		<li>Design is less important than readability/accessibility.</li>
		<li>Rules are preferred over exceptions.</li>
	</ul>
	<p>
		Sugar.css can be used as a base even for huge projects. You should then consider not only
		changing the provided custom properties but also modifying the Sugar.css source code.
	</p>
</article>
<!-- <article>
	<details>
		<summary role="button">Download CSS</summary>
		<div>
			<p>
				You can also change colors and spacings in the <a href="/customize">customization page</a>,
				they will be then used in the downloaded build.
			</p>
			<Downloader></Downloader>
		</div>
	</details>
</article>
 -->
