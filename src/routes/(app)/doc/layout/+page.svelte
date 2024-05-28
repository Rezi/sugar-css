<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const pageExampleCode = `<body>
  <header>
	<nav class="s-container">
		<div>Your logo</div>
		<menu>
		  <li><a>item</a></li>
		  <li><a>item</a></li>
		</menu>
	</nav>
  </header>
  <div class="s-container">main content</div>
  <footer>
    <div class="s-container">Footer content</div>
  </footer>
</body>`;

	const lightCardCode = `<article class="s-light">
 	<h2>Headline</h2>
 	<p>This is a boring text</p>
	<search>
		<input type="text" aria-label="Search">
		<button>I do nothing</button>
	</search>
</article>`;

	const darkCardCode = `<article class="s-dark">
 	<h2>Headline</h2>
 	<p>This is a boring text</p>
	<search>
		<input type="text" aria-label="Search">
		<button>I do nothing</button>
    </search>
</article>`;
</script>

<svelte:head>
	<title>Layout & Themes | Sugar.css</title>
	<meta name="description" content="Sugar.css - Layout & Themes" />
</svelte:head>

<h1>Layout & Themes</h1>

<article>
	<h2>Container</h2>

	<dl>
		<dt><code>.s-container</code></dt>
		<dd>
			<p>The <code>.s-container</code> class defines the default maximum page width.</p>
			<p>It includes <code>2.5rem</code> padding.</p>

			<p>
				Its width is calculated with an inline margin. This ensures the container remains the same
				width, regardless of the presence of a scrollbar.
			</p>
			<p>
				The default container width is <strong>65rem</strong>, but can be customized by
				<code>--container-width-number</code> custom property (framework adds rem units).
			</p>
		</dd>
	</dl>
</article>

<article class="non-clickable">
	<section>
		<h2>Page Structure</h2>
		<p>
			The <code>body</code>, <code>header</code>, and <code>footer</code> elements may be treated
			differently, especially if the latter two are direct children of <code>body</code>:
		</p>
		<hr />
		<dl>
			<dt><code>body</code></dt>
			<dd>
				If it has a <code>footer</code> as a direct child, it receives
				<code>min-height: 100dvh; display: flex; flex-direction: column;</code>. This is necessary
				to keep the footer at the bottom of the page even with minimal content.
			</dd>
			<dt><code>header</code></dt>
			<dd>
				If it is a direct child of <code>body</code>, the <code>header</code> becomes sticky, ensuring
				it remains visible while scrolling. A slight box shadow is also applied in this case.
			</dd>

			<dt><code>footer</code></dt>
			<dd>
				If it is a direct child of <code>body</code>, it is positioned at the bottom of the document
				even with limited content. A slight box shadow is applied in this scenario as well.
			</dd>
		</dl>
	</section>
	<CardCode
		code={pageExampleCode}
		showExample={true}
		iframe={true}
		ariaLabel={'Page structure example layout'}
	></CardCode>
</article>

<article>
	<h2>Themes</h2>
	<p>
		Sugar.css supports <em>light</em> and <em>dark</em> themes by default. You can preview them on
		the
		<a href="/customize">customization</a> page.
	</p>
	<p>
		Themes are automatically switched based on the <code>prefers-color-scheme</code> set by the browser
		or operating system.
	</p>
	<p>
		Base colors, defined as custom properties, are provided in two sets: one for the light theme and
		the other for the dark theme.
	</p>
	<p>
		You can manually set any element to the dark or light theme by adding the following classes:
	</p>
	<ul>
		<li><code>.s-dark</code></li>
		<li><code>.s-light</code></li>
	</ul>
	<h3>Light theme</h3>
	<CardCode examplePosition="top" card={false} code={lightCardCode}></CardCode>
	<h3>Dark theme</h3>
	<CardCode examplePosition="top" card={false} code={darkCardCode}></CardCode>
</article>

<style>
</style>
