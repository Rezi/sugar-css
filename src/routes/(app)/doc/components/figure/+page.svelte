<script>
	import CardCode from '$lib/components/CardCode.svelte';
	const figureCode = `<figure>
	<img src="/imgs/lake.png" 
	alt="Mountains meet tranquility at the lake's edge" />
	<figcaption>
		Mountains meet tranquility at the lake's edge
	</figcaption>
</figure>`;
</script>

<svelte:head>
	<title>Figure | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Figure" />
</svelte:head>

<hgroup>
	<h1>Components</h1>
	<h2>Figure</h2>
</hgroup>

<article>
	<section>
		<h2>Figure with caption</h2>
		<dl>
			<dt><code>figure</code> <code>figcaption</code></dt>
			<dd>
				<code>figure</code> represents self-contained content, potentially with an optional caption,
				which is specified using the <code>figcaption</code> element. The figure, its caption, and its
				contents are referenced as a single unit.
			</dd>
		</dl>
	</section>

	<CardCode code={figureCode}></CardCode>
</article>
