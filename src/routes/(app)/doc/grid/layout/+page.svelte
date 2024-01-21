<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const gridLayoutExampleCode = `<div class="s-grid" style="--padding: 1rem;">
	<div>
		<div style="--span:1;">A</div>
		<div style="--span:2;">B</div>
	</div>
</div>
<div class="s-grid" style="--padding: 1rem;">
	<div>
		<div style="--span:2;">😀</div>
		<div style="--span:4;">😎</div>
	</div>
</div>
<div class="s-grid" style="--padding: 1rem; --span:4;">
	<div>
		<div style="--span-6:2;">1</div>
		<div>2</div>
	</div>
</div>`;
</script>

<hgroup>
	<h1>Grid</h1>
	<h2>Layout</h2>
</hgroup>

<article class="colored-grid">
	<section>
		<h2>Layout grid</h2>
		<p>
			As long as sum of spans is lower than number of hypothetical columns, the cells divide the
			rest of space evenly. You can leverage this behavior for setting up page layouts.
		</p>
		<p>
			Beware that two cells with span of <strong>1 and 2</strong> differ from
			<strong>2 and 4</strong>. The ratio is the same, difference is in, when these columns break
			below each other.
		</p>
		<p>
			When more grids are placed once after each other, gap is added between them to mimic one
			continuous grid.
		</p>
	</section>

	<CardCode code={gridLayoutExampleCode} resizable={true}></CardCode>
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
