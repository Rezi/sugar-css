<script>
</script>

<svelte:head>
	<title>Grid API | Sugar.css</title>
	<meta name="description" content="Sugar.css - Grid > API" />
</svelte:head>

<hgroup>
	<h1 aria-label="Grid - Api">Grid</h1>
	<h2 aria-hidden="true">API</h2>
</hgroup>
<section>
	The Sugar grid is composed of one class defining a grid and several custom properties.
</section>
<article aria-label="Grid documentation - api">
	<section>
		<h2>Classes</h2>
		<dl style="--dl-width:10rem">
			<dt><code>.s-grid</code></dt>
			<dd>
				<p>
					Defines a grid container and a media query container with:
					<code>grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));</code>
				</p>
			</dd>

			<dt><code>.s-fixed</code></dt>
			<dd>
				<p>
					Can be used together with <code>.s-grid</code>. When used, grid columns do not consume
					remaining space if there are fewer columns than possible. Useful for wide grids with a
					small number of columns.
				</p>
			</dd>

			<dt><code>.s-auto</code></dt>
			<dd>
				<p>
					Works like regular <code>.s-grid</code> once cells start filling second row of the grid (behavior
					under which empty columns are collapsed).
				</p>
				<p>
					Works like <code>.s-fixed</code> as long cells only fill the first row.
				</p>
				<p>
					<mark>Experimental! Only works in chrome</mark> See
					<a href="/doc/grid/examples#auto-columns">examples</a> section for more info.
				</p>
			</dd>
		</dl>
	</section>
	<section>
		<h2>Custom properties</h2>
		<p>
			All custom properties (except <code>--gap</code>) can be used on both the
			<code>.s-grid</code> and its cells. When applied to the grid element, they are applied to all cells
			globally. If applied to a child, they are specific to that element.
		</p>
		<dl style="--dl-width:10rem">
			<dt><code>--span</code></dt>
			<dd>Defies how many columns are used by a cell. <strong>Default: 1</strong></dd>

			<dt><code>--span-N</code></dt>
			<dd>
				<p>
					<var>N</var> is a number between <strong>2</strong> and <strong>12</strong>.
				</p>
				<p>
					Defines how many columns are used by a cell when <var>n</var> columns exist in the grid.
					For example, when <code>--span-3: 2</code> is used, the cell spans across 2 columns only when
					at least 3 columns fit the grid.
				</p>
			</dd>

			<dt><code>--offset</code></dt>
			<dd>Defines how many columns are left empty before a cell. <strong>Default: 0</strong></dd>

			<dt><code>--offset-N</code></dt>
			<dd>
				<p>
					<var>N</var> is number between <strong>2</strong> and <strong>12</strong> eg.
					<code>--offset-3</code>
				</p>
				<p>
					Defines how many columns are left empty before a cell when <var>n</var> columns exist in the
					grid.
				</p>
			</dd>

			<dt><code>--padding</code></dt>
			<dd>
				Defines padding on a cell. Handy when used on the whole grid. <strong>Default: 0</strong>
			</dd>

			<dt><code>--gap</code></dt>
			<dd>Defines the gap between cells.</dd>
		</dl>
	</section>
</article>

<style lang="scss">
</style>
