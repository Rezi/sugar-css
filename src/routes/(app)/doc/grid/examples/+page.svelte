<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const gridSimpleExampleCode = `<div class="s-grid" style="--span:2;">
	<div>
		<div>A</div>
		<div>B</div>
		<div>C</div>
		<div>D</div>
	</div>
</div>`;

	const gridAdvanceExampleCode = `<div 
	class="s-grid" 
	style="
	--span:2; 
	--padding: 1rem; 
	--gap:0.25rem;">
	<div>
		<div style="--span-3:1;">A</div>
		<div style="--span-4:3;">B</div>
		<div style="--span:3;">C</div>
	</div>
</div>`;

	const gridInheritanceExampleCode = `<div class="s-grid" style="--span:5;--span-6:2;">
	<div>
		<div>A</div>
		<div>B</div>
		<div>C</div>
	</div>
</div>`;

	const gridFixedExampleCode = `<div class="s-grid s-fixed">
	<div>
		<div>A</div>
		<div>B</div>
	</div>
</div>`;

	const gridNestedExampleCode = `<div 
	class="s-grid" 
	style="--span:3;--padding: 1rem; ">
	<div>
		<div>
			<div class="s-grid">
				<div>
					<div>A</div>
					<div>B</div>
					<div>C</div>
				</div>
			</div>
		</div>
		<div>B</div>
		<div>C</div>
	</div>
	
</div>`;

	const gridOffsetExampleCode = `<div class="s-grid" style="--padding: 1rem;">
	<div>
		<div style="--span:1;">A</div>
		<div style="--span:1;--offset:1;">B</div>
	</div>
</div>`;
</script>

<svelte:head>
	<title>Grid Examples | Sugar.css</title>
	<meta name="description" content="Sugar.css - Grid > Examples" />
</svelte:head>

<hgroup>
	<h1 aria-label="Grid - Examples">Grid</h1>
	<h2 aria-hidden="true">Examples</h2>
</hgroup>

<article class="colored-grid" aria-label="Grid documentation - examples">
	<section>
		<h2>Simple</h2>

		<p>
			Below is a simple example of the base grid where the span per element is set to
			<var>two columns (2 * 5rem)</var>. When an additional <var>10rem</var> becomes available, a
			new element is automatically placed into the first row. You can easily specify the optimal
			cell size, and the framework handles the layout automatically. No need for cumbersome
			<code>col-sm-6 col-md-4 col-lg-3</code> classes just to make a cell similar in size across resolutions.
		</p>
	</section>

	<CardCode code={gridSimpleExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />

	<section>
		<h2>Advanced</h2>
		<p>
			In the example below, the padding of all cells was globally set using
			<code>--padding: 1rem;</code>, and the grid gap was changed from the default <code>1rem</code>
			to
			<code>--gap: 0.25rem;</code>.
		</p>
		<p>The default span is set to <code>--span: 2;</code>.</p>
		<p>
			The cell <strong>A</strong> has
			<code>--span-3: 1;</code>, indicating that once there are at least three columns available,
			this cell should take one column instead of the default <code>--span: 2;</code>.
		</p>
		<p>
			The cell <strong>B</strong> works similarly to cell <strong>A</strong>, but with different
			numbers.
		</p>
		<p>
			The cell <strong>C</strong> simply overwrites the default <code>--span: 2;</code> with
			<code>--span: 3;</code>.
		</p>
	</section>

	<CardCode code={gridAdvanceExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />

	<section>
		<h2>Shared cell definitions</h2>

		<p>
			A significant advantage of the Sugar grid is the ability to define cell behavior on the grid
			itself, avoiding the need to specify behavior for each individual cell, even when it's the
			same across the grid.
		</p>
		<p>
			The example below addresses a simple requirement: defining three columns when the container is
			wide and just one column when it gets narrower. The goal is to prevent a situation where there
			are two cells in the first row and an odd one in the second. When there are 5 or fewer columns
			available, they span across the whole container. When there are six columns, they span across
			just two columns. The beauty lies in the fact that you can define this cell behavior on the
			grid itself, not on every single cell separately.
		</p>
	</section>

	<CardCode code={gridInheritanceExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />
	<section>
		<h2>Nested grids</h2>
		<p>
			Grids can be nested; however, it's important to note that defaults from the outer grid are not
			inherited by the nested grid.
		</p>
		<p>Beware that a cell cannot serve as a grid container at the same time.</p>
	</section>

	<CardCode code={gridNestedExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />
	<section>
		<h2>Fixed columns</h2>

		<p>
			In contrast to the default grid setup, columns in a fixed grid never expand to unused space.
			This behavior is useful when dealing with a dynamic number of items in the grid wrapper.
		</p>
		<p>
			For example, consider product cards in an e-shop. If you filter them to only one product, you
			wouldn't want it to expand across the entire wrapper; instead, it remains fixed.
		</p>
	</section>

	<CardCode code={gridFixedExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />
	<section>
		<h2>Cell offset</h2>
	</section>

	<CardCode code={gridOffsetExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>
</article>

<style lang="scss">
	:global(.colored-grid .s-grid > * > *:not(.s-grid)) {
		background-color: var(--s-color-bg-85-fg);
	}

	:global(.colored-grid .s-grid .s-grid > * > *) {
		background-color: var(--s-color-bg);
	}
</style>
