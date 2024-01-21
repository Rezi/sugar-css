<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const blockquoteCode = `<blockquote cite="https://...">
	An unexamined life is not worth living
	<footer>Socrates, 
		<cite>Plato's Apology (38a5–6)</cite>
	</footer>
</blockquote>`;
</script>

<hgroup>
	<h1>Components</h1>
	<h2>Block Quote</h2>
</hgroup>

<article>
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
