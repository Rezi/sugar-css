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

<hgroup>
	<h1>Grid</h1>
	<h2>Examples</h2>
</hgroup>

<article class="colored-grid">
	<section>
		<h2>Simple</h2>
		<p>
			Below you can see base grid where span per element is set to
			<var>two columns = 2 * 5rem</var>. Once there is another <var>10rem</var> available, new
			element is put into the first row. You simply specify what is the optimal cell size and rest
			is done automatically. No more <code>col-sm-6 col-md-4 col-lg-3</code>, for just making a cell
			similar size across resolutions.
		</p>
	</section>

	<CardCode code={gridSimpleExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />

	<section>
		<h2>Advanced</h2>
		<p>
			In the example below you can see that padding of all cells was globally set by <code
				>--padding: 1rem;</code
			>
			as well as the grid gap was changed from default <code>1rem</code> by
			<code>--gap:0.25rem;</code>.
		</p>
		<p>The default span is set to <code>--span:2;</code>.</p>
		<p>
			The cell <strong>A</strong> has
			<code>--span-3:1;</code>
			telling once there are at least three columns available, this cell should take one column instead
			of the default <code>--span:2;</code>
		</p>
		<p>
			The cell <strong>B</strong> works similarly to call <strong>A</strong>
		</p>
		<p>
			The cell <strong>C</strong> simply overwrite the default <code>--span:2;</code> with
			<code>--span:3;</code>
		</p>
	</section>

	<CardCode code={gridAdvanceExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />

	<section>
		<h2>Shared cell definitions</h2>
		<p>
			Big pain of traditional grids is need to define behavior per cell, even in case it is the same
			for every single cell in the grid. In Sugar grid you can define cell behavior on the grid
			itself, every cell then inherits it.
		</p>
		<p>
			Example bellow solves simple requirement: Define 3 columns when a container is wide and just
			one column when it gets narrower. We simply want to avoid situation when there are two cells
			in first row and odd one in the second. When there are 5 or less columns available they span
			across whole container. When there are six, they just span across two columns. The great thing
			is that you can define this cell behavior on the grid itself, not on every single cell
			separately.
		</p>
	</section>

	<CardCode code={gridInheritanceExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />
	<section>
		<h2>Nested grids</h2>
		<p>
			Grids can be nested. Note that defaults from outer grid are not inherited by the nested grid.
		</p>
		<p>Cell cannot be a grid container at the same time.</p>
	</section>

	<CardCode code={gridNestedExampleCode} resizable={true}></CardCode>
	<p><em>You can resize the card above by the bottom-right handle</em></p>

	<hr />
	<section>
		<h2>Fixed columns</h2>
		<p>
			Contrary the default grid setup, columns in fixed grid never expand to unused space. This is
			useful when there is dynamic number of items in its wrapper.
		</p>
		<p>
			Example: You have product cards in an e-shop. In case you filter them to one, you don't want
			it to expand across whole wrapper.
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
