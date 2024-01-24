<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const pageExampleCode = `<body>
  <header>
	<nav class="s-container">
		<div>Your logo</div>
		<menu>
		  <li><a href="#">item</a></li>
		  <li><a href="#">item</a></li>
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
		<input type="text">
		<button>I do nothing</button>
	</search>
</article>`;

	const darkCardCode = `<article class="s-dark">
 	<h2>Headline</h2>
 	<p>This is a boring text</p>
	<search>
		<input type="text">
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
			<p>css class defines default max page width.</p>
			<p>It has <code>2.5rem</code> padding.</p>

			<p>
				Its width is defined only by calculated inline margin. This way the container is still the
				same width, no matter whether there is a scrollbar or not
			</p>
			<p>
				The container width is set to <strong>65rem</strong> by default, but can be changed by a
				custom property <code>--container-width-number</code> (rem units are added by the framework)
			</p>
		</dd>
	</dl>
</article>

<article>
	<section>
		<h2>Page structure</h2>
		<p>
			<code>body</code>, <code>header</code> and or <code>footer</code> elements could be treated in
			a special way if the latter two are direct children of <code>body</code>:
		</p>
		<hr />
		<dl>
			<dt><code>body</code></dt>
			<dd>
				If it has <code>footer</code> as direct child, it gets
				<code>min-height: 100dvh; display: flex; flex-direction: column;</code>. This is needed for
				keeping the footer as bottom of page even if there is not enough content in the page.
			</dd>
			<dt><code>header</code></dt>
			<dd>
				If it is direct child of <code>body</code>, <code>header</code> gets position sticky so it is
				visible on a page all the time when scrolling. It gets a slight shadow box in that case as well.
			</dd>

			<dt><code>footer</code></dt>
			<dd>
				If is is direct child of <code>body</code>, it is moved to the bottom of the document even
				if there is not enough content in the page. It gets a slight shadow box in that case as
				well.
			</dd>
		</dl>
	</section>
	<CardCode code={pageExampleCode} showExample={true} iframe={true}></CardCode>
</article>

<article>
	<h2>Themes</h2>
	<p>
		Sugar.css supports <em>light</em> and <em>dark</em> themes by default. You can test them in
		<a href="/customize">customization</a> page.
	</p>
	<p>
		Themes are switched by
		<code>prefers-color-scheme</code> set by browser or operating system.
	</p>
	<p>
		Base colors (their custom properties) are doubled. One set of colors for light theme, other for
		dark.
	</p>
	<p>You can turn any element to dark or light theme by adding classes</p>
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
