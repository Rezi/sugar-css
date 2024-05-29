<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const dlCode = `<dl>
	<dt>Dictionary</dt>
	<dd>
		a reference book on a particular subject, 
		the items of which are typically arranged 
		in alphabetical order.
	</dd>
</dl>`;

	const listsOlCode = `<ol>
	<li>Introduction to HTML</li>
	<li>Understanding CSS Styling
		<ol>
			<li>JavaScript Fundamentals</li>
		</ol>
	</li>
</ol>`;

	const listsUlCode = `<ul>
	<li>Responsive Web Design Techniques</li>
	<li>Building Web Applications with Node.js</li>
	<li>Database Management with SQL</li>
</ul>`;

	const listsMenuCode = `<menu>
	<li>Deploying Websites to Hosting Platforms</li>
	<li>Web Security Best Practices</li>
	<li>Introduction to Serverless Architecture</li>
</menu>`;
</script>

<svelte:head>
	<title>Lists | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Lists" />
</svelte:head>

<hgroup>
	<h1 aria-label="Components - Lists">Components</h1>
	<h2 aria-hidden="true">Lists</h2>
</hgroup>

<article aria-label="Definition list">
	<section aria-label="Definition list DOM element description">
		<h2>Definition list</h2>
		<dl>
			<dt><code>dl</code></dt>
			<dd>
				Represents a description list. The element encloses a list of groups of terms (specified
				using the <code>dt</code> element) and descriptions (provided by
				<code>dd</code> elements). Common uses for this element are to implement a glossary or to display
				metadata (a list of key-value pairs).
			</dd>
		</dl>
	</section>

	<CardCode code={dlCode} resizable={true}></CardCode>

	Definition list is responsive by default. <code>dl</code> comes with two
	<strong>css variables</strong>
	and their default values:
	<ul>
		<li><code>--dl-width: 9rem;</code></li>
		<li><code>--dd-min-width: 70%</code></li>
	</ul>

	<p>
		As long as
		<code>--dl-width</code> is smaller that 100% minus
		<code>--dd-min-width</code>, both
		<code>dt</code>
		and <code>dl</code> stay in one line.. Otherwise they are positioned one below the other.
	</p>
</article>

<article aria-label="Ordered, unordered and definition lists">
	<section>
		<h2>Ordered list</h2>
		<dl>
			<dt><code>ol</code></dt>
			<dd>Represents an ordered list of items — typically rendered as a numbered list.</dd>
		</dl>
	</section>
	<CardCode code={listsOlCode}></CardCode>
	<hr />

	<section>
		<h2>Unordered list</h2>
		<dl>
			<dt><code>ul</code></dt>
			<dd>Represents an unordered list of items, typically rendered as a bulleted list.</dd>
		</dl>
	</section>
	<CardCode code={listsUlCode}></CardCode>

	<hr />
	<section>
		<h2>Menu list</h2>
		<dl>
			<dt><code>menu</code></dt>
			<dd>
				Is described in the HTML specification as a semantic alternative to
				<code>ul</code>, but treated by browsers (and exposed through the accessibility tree) as no
				different than <code>ul</code>
			</dd>
		</dl>
	</section>
	<CardCode code={listsMenuCode}></CardCode>

	<code>list-style-type</code> for <code>menu</code> element is set to none as you can see.
</article>
