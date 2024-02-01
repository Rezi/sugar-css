<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const navHeaderCode = `<nav>
	<a href="/">Sugar.scss</a>
	<menu>
		<li><a href="/doc">Getting started</a></li>
		<li><a href="https://github.com/">Github</a></li>
	</menu>
</nav>`;
	const navAsideCode = `<aside>
	<nav>
		<menu>
			<li><a href="#">Layout</a></li>
			<li><a href="#">Navigation</a></li>
			<li><a href="#">Grid</a></li>
		</menu>
	</nav>
<aside>`;
</script>

<svelte:head>
	<title>Menu | Sugar.css</title>
	<meta name="description" content="Sugar.css - Navigation >  Menu" />
</svelte:head>

<hgroup>
	<h1>Navigation</h1>
	<h2>Menu</h2>
</hgroup>

<section>
	<p>
		By default, the <code>nav</code> element has the following styles: <code>display:flex</code> and
		<code>justify-content: space-between;</code>. Any link used in the navigation has no underline
		decoration by default.
	</p>
	<p>
		If you need to organize multiple navigation groups, use more <code>menu</code> elements.
		<code>menu</code> is a semantic alternative to the <code>ul</code> element and can contain
		<code>li</code> with navigation elements.
	</p>
</section>

<article>
	<h2>Nav</h2>

	<section>
		<p>
			Styles are applied to <code>nav</code> and its sub-elements only when it has at least one
			<code>menu</code> as a direct child.
		</p>
	</section>

	<CardCode code={navHeaderCode}></CardCode>

	<hr />

	<section>
		<h2>Nav Aside</h2>
		<p>
			When the <code>nav</code> is used in the <code>aside</code> element, navigation is ordered vertically.
		</p>
	</section>

	<CardCode code={navAsideCode}></CardCode>
</article>
