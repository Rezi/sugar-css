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

<hgroup>
	<h1>Navigation</h1>
	<h2>Menu</h2>
</hgroup>

<section>
	<p>
		By default <code>nav</code> element has following styles: <code>display:flex</code> and
		<code>justify-content: space-between;</code>. Any link used in the navigation has no underline
		decoration by default.
	</p>
	<p>
		If you need to spread multiple navigation groups. Use more <code>menu</code> elements.
		<code>menu</code>
		is semantic alternative to <code>ul</code> element and can contain <code>li</code> with navigation
		elements.
	</p>
</section>

<article>
	<h2>Nav</h2>
	<section>
		<p>
			Styles are only applied to <code>nav</code> and its sub elements, when it has at least one
			<code>menu</code> as direct child
		</p>
	</section>

	<CardCode code={navHeaderCode}></CardCode>

	<hr />
	<section>
		<h2>Nav aside</h2>
		When
		<code>nav</code> is used in <code>aside</code> element. Navigation is ordered vertically.
	</section>

	<CardCode code={navAsideCode}></CardCode>
</article>
