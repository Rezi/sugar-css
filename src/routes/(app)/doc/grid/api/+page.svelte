<script>
</script>

<svelte:head>
	<title>Grid API | Sugar.css</title>
	<meta name="description" content="Sugar.css - Grid > API" />
</svelte:head>

<hgroup>
	<h1>Grid</h1>
	<h2>API</h2>
</hgroup>
<section>
	The Sugar grid is composed of one class defining a grid and several custom properties.
</section>
<article>
	<section>
		<h2>Classes</h2>
		<dl style="--dl-width:10rem">
			<dt><code>.s-grid</code></dt>
			<dd>
				<p>
					Defines a grid container and a media query container. Unfortunately, due to a
					<a href="https://bugs.webkit.org/show_bug.cgi?id=267525">bug in Safari</a>, an additional
					<code>div</code>
					inside <code>.s-grid</code> is necessary. This class currently defines only a container
					query, while the nested <code>div</code> defines a grid container with:
					<code>grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));</code>
				</p>
				<p>
					Once the Safari bug is resolved, a new version of sugar.css will be introduced, and the
					nested <code>div</code> will be removed.
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
