<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const code = `<article>
	<header>
		Header content
	</header>
	Main content
	<footer>
		Footer content
	</footer>
</article>`;
</script>

<svelte:head>
	<title>Card | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Card" />
</svelte:head>

<hgroup>
	<h1>Components</h1>
	<h2>Card</h2>
</hgroup>

<section>
	<code>article</code> element is styled probably in the most opinionated way among all Sugar
	elements.
	<p>
		Card's look and feel fits to what an article should represent (independent reusable content:
		post, product, widget,..).
	</p>
</section>

<article>
	<section>
		<dl>
			<dt><code>article</code></dt>
			<dd>
				Represents a self-contained composition in a document, page, application, or site, which is
				intended to be independently distributable or reusable (e.g., in syndication). Examples
				include a forum post, a magazine or newspaper article, a blog entry, a product card, a
				user-submitted comment, an interactive widget or gadget, or any other independent item of
				content.
			</dd>
		</dl>
	</section>

	<CardCode {code} card={false} language="xml"></CardCode>

	<code>header</code> and <code>footer</code> elements are optional.
</article>
