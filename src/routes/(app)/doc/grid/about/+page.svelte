<script>
</script>

<svelte:head>
	<title>Grid About | Sugar.css</title>
	<meta name="description" content="Sugar.css - Grid > About" />
</svelte:head>

<hgroup>
	<h1>Grid</h1>
	<h2>About</h2>
</hgroup>

<article class="numbered">
	<section>
		<p>
			Sugar grid is quite different from grid systems you probably know already (Bootstrap,
			Tailwind), but the result is very similar.
		</p>
		<p>
			<strong
				>It can do the same - in many cases even better - than traditions responsive grids. <br />
				All of that is done in only 150 lines of code!</strong
			> Bootstrap gid is 10x bigger for example.
		</p>

		<p>Sugar grid is:</p>
		<ol>
			<li>Based on css grid</li>
			<li>Container driven</li>
			<li>Derived from its content</li>
			<li>Defined by custom properties</li>
		</ol>

		<mark>Beware! There is a bug in Safari, which does not allow to use</mark> <code>auto-fit</code>
		<mark>
			on elements with container queries! Until the bug is fixed, there must be additional otherwise
			meaningless
		</mark> <code>div</code> <mark> inside the </mark><code>.s-grid</code>
		<mark
			>wrapping all the cells. Once the bug is resolved and sugar grid is adjusted accordingly, all
			the "meaningless" divs can be removed</mark
		>
	</section>

	<h2>Based on css grid</h2>
	<p>It is built around:</p>
	<p><code>grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));</code></p>
	<p>It means that items are placed into dynamically created columns.</p>

	<h2>Container driven</h2>
	<p>
		Sugar grid uses container queries under the hood. It means that Sugar grid is component ready.
		Traditionally, a media query driven grid is hard to used in a library components as library
		developer does not know what width the component will have. With Sugar's container driven grid
		this is not issue at all.
	</p>

	<h2>Derived from its content</h2>
	<p>
		Columns are added to a grid as the grid (container) grows. Columns have a predefined optimal
		size (5rem). Once there is additional 5rem, new column is added. Until then columns evenly eat
		the remaining space.
	</p>
	<p>
		Sugar grid take care about some extras which the css grid itself does not solve. Deal with
		scenarios like your item should span across 5 columns, but the container just has space for 3,
		etc.
	</p>

	<h2>Defined by custom properties</h2>
	<p>
		The grid container is defined by class <code>.s-grid</code> everything else is defined by inline
		custom properties.
	</p>
</article>

<style lang="scss">
	.numbered {
		counter-reset: sections;
		h2 {
			counter-increment: sections;
			&:before {
				content: counter(sections) ') ';
				display: inline;
			}
		}
	}
</style>
