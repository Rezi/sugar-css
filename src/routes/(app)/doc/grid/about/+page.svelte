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
			The Sugar grid differs significantly from traditional grid systems like Bootstrap or Tailwind,
			yet achieves similar results. Impressively, it accomplishes this in only 150 lines of code,
			making it considerably more concise than alternatives such as Bootstrap's grid, which is 10
			times larger.
		</p>

		<p>Sugar grid is:</p>
		<ol>
			<li>Based on CSS grid</li>
			<li>Container-driven</li>
			<li>Derived from its content</li>
			<li>Defined by custom properties</li>
		</ol>

		<article class="warning-card">
			Beware! There is a bug in Safari that does not allow the use of <code>auto-fit</code> on
			elements with container queries! Until the bug is fixed, there must be an additional,
			otherwise meaningless,
			<code>div</code> wrapping all the cells inside the <code>.s-grid</code>. Once the bug is
			resolved and Sugar grid is adjusted accordingly, all the "meaningless" divs can be removed.
		</article>
	</section>

	<h2>Based on CSS Grid</h2>
	<p>It is built around:</p>
	<p><code>grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));</code></p>
	<p>Which means that items are placed into dynamically created columns.</p>

	<h2>Container Driven</h2>
	<p>
		Sugar grid uses container queries under the hood. This means that Sugar grid is component-ready.
		Traditionally, a media query-driven grid is challenging to use in library components, as the
		library developer does not know what width the component will have. With Sugar's
		container-driven grid, this is not an issue at all.
	</p>

	<h2>Derived from Its Content</h2>
	<p>
		Columns are added to a grid as the grid (container) grows. Columns have a predefined optimal
		size (5rem). Once there is an additional 5rem, a new column is added. Until then, columns evenly
		eat the remaining space. Sugar grid takes care of scenarios like your item should span across 5
		columns, but the container only has space for 3, etc.
	</p>

	<h2>Defined by Custom Properties</h2>
	<p>
		The grid container is defined by the class <code>.s-grid</code>; everything else is defined by
		inline custom properties.
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

	.warning-card {
		background-color: var(--s-color-bg-negative);
	}
</style>
