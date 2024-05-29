<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const blockquoteCode = `<blockquote cite="https://...">
	An unexamined life is not worth living
	<footer>Socrates, 
		<cite>Plato's Apology (38a5–6)</cite>
	</footer>
</blockquote>`;
</script>

<svelte:head>
	<title>Block Quote | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Block Quote" />
</svelte:head>

<hgroup>
	<h1 aria-label="Components - Block Quote">Components</h1>
	<h2 aria-hidden="true">Block Quote</h2>
</hgroup>

<article role="presentation">
	<section>
		<dl>
			<dt><code>blockquote</code></dt>
			<dd>
				Indicates that the enclosed text is an extended quotation. A URL for the source of the
				quotation may be given using the <code>cite</code> attribute, while a text representation of
				the source can be given using the <code>cite</code> element.
			</dd>
		</dl>
	</section>

	<CardCode code={blockquoteCode}></CardCode>

	<code>footer</code> elements is optional.
</article>
