<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const hrCode = `Lorem ipsum dolor sit amet
<hr>
consectetur adipisicing elit`;
</script>

<svelte:head>
	<title>Horizontal rule | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Horizontal rule" />
</svelte:head>

<hgroup>
	<h1 aria-label="Components - Horizontal rule">Components</h1>
	<h2 aria-hidden="true">Horizontal rule</h2>
</hgroup>

<article aria-label="Hr DOM element description">
	<section>
		<dl>
			<dt><code>hr</code></dt>
			<dd>
				represents a thematic break between paragraph-level elements: for example, a change of scene
				in a story, or a shift of topic within a section.
			</dd>
		</dl>
	</section>

	<CardCode code={hrCode}></CardCode>

	<p>
		When used as a direct child of <code>article</code>, it gets a negative margin to span across
		the full card's width.
	</p>
</article>
