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
	<h1>Components</h1>
	<h2>Horizontal rule</h2>
</hgroup>

<article>
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
		When used as direct child of <code>article</code>, it gets negative margin to span across full
		card's width
	</p>
</article>
