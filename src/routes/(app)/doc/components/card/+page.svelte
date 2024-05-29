<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const code = `<article aria-label="Example card">
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
	<h1 aria-label="Components - Card">Components</h1>
	<h2 aria-hidden="true">Card</h2>
</hgroup>

<section>
	<p>
		The <code>article</code> element is styled in a particularly opinionated way among all Sugar elements.
	</p>
	<p>
		The card's look and feel are designed to align with the typical representation of an article
		(independent reusable content: post, product, widget, etc.).
	</p>
</section>

<article aria-label="Article DOM element description">
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
