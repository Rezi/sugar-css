<script>
	import CardCode from '$lib/components/CardCode.svelte';
	const progressCode = `<div style="--span:6;" class="s-grid">
	<div>				
		<div>
			<label><progress value=".7" max="1">70 %</progress></label>
		</div>
		<div aria-busy="true" inert>
			<progress role="presentation" ></progress>
		</div>
	</div>
</div>`;
</script>

<svelte:head>
	<title>Progress | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Progress" />
</svelte:head>

<hgroup>
	<h1>Components</h1>
	<h2>Progress</h2>
</hgroup>

<article>
	<section>
		The <code>progress</code> element without a <code>value</code> attribute behaves as a loader.
		Use <code>role="presentation"</code> on the <code>progress</code> 'loader' element as it no longer
		represents progress in percentages.
	</section>
	<CardCode code={progressCode} examplePosition="top"></CardCode>
</article>
