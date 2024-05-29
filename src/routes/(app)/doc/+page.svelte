<script>
	import InlineCode from '$lib/components/InlineCode.svelte';
	const cdn = `<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/gh/Rezi/sugar-css@main/dist/sugar.min.css"
/>`;
</script>

<svelte:head>
	<title>Getting started | Sugar.css</title>
	<meta name="description" content="Sugar.css - Getting started" />
</svelte:head>

<h1>Getting started</h1>

<article>
	<h2>Install</h2>

	<p>Explore various ways to integrate Sugar.css.</p>

	<ul>
		<li>
			Customize online and <a href="/customize" aria-label="Download own customized build"
				>download</a
			>
		</li>
		<li>
			<code>npm install sugar-css-framework</code>
		</li>
		<li>
			Command line <code>npx sugar-css-framework</code> (this way grid column width can be modified)
		</li>
		<li>Access via CDN:</li>
	</ul>
	<code>{cdn}</code>
</article>

<article>
	<h2>Usage</h2>

	<h3>Browser Support</h3>

	<p>
		Sugar.css is optimized for use with modern browsers. The features employed by Sugar CSS enjoy
		widespread support, exceeding 90% in the latest versions of Chrome, Safari, Firefox, and
		numerous Chromium-based browsers. Verify the current browser support for specific CSS features
		such as <code>:has()</code>, <code>:with()</code>, <code>aspect-ratio</code>,
		<code>color-mix()</code>, <code>@container queries</code>, and <code>CSS grid</code>.
	</p>

	<h3>Mindset</h3>
	<p>
		With the exception of classes like <code>.s-dark</code>, .<code>s-light</code>,
		<code>.s-outline</code>, <code>.s-secondary</code>,
		<code>.s-grid</code>, <code>.s-fixed</code>, and <code>.s-container</code>, Sugar.css can be
		viewed as a CSS reset. All styles applied by Sugar.css utilize the :where() pseudo-selector,
		avoiding specificity issues. There's no need to move Sugar.css into a separate layer; you can
		seamlessly overwrite styles without additional complexity. The emphasis is on simplicity,
		keeping the size compact at 7.5 kB when minified.
	</p>
	<p>Sugar.css tries to be as simple as possible and keep its size down (7.5 kB minified).</p>

	<h3>Use cases</h3>
	<p>Sugar.css is well-suited for projects where::</p>
	<ul>
		<li>Design adheres to defined rules rather than subjective aesthetics.</li>
		<li>Readability and accessibility take precedence over intricate design elements.</li>
		<li>Consistent rules are favored over numerous exceptions.</li>
	</ul>
	<p>
		It's not limited to small projects; Sugar.css can serve as a foundational layer even for
		substantial endeavors. For extensive projects, consider modifying not only the provided custom
		properties but also the source code of Sugar.css.
	</p>
</article>
