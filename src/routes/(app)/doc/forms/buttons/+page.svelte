<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const buttonsCode = `<form style="--span:6;" class="s-grid">
	<div>
		<div>
			<button>Button</button>
		</div>
		<div>
			class="s-secondary"
			<button class="s-secondary">Secondary Button</button>
		</div>
		<div>
			class="s-outline"
			<button class="s-outline">Outline Button</button>
		</div>
		<div>
			Disabled
			<button disabled>Disabled</button>
		</div>
		<div>
			<label>Input type="button"<input type="button" value="Button" /></label>
		</div>
		<div>
			<label>Input type="submit"<input type="submit" value="Submit Button" /></label>
		</div>
		<div>
			a href role="button"
			<a href="#" role="button">Button</a>
		</div>
	</div>	
</form>
`;
</script>

<svelte:head>
	<title>Buttons | Sugar.css</title>
	<meta name="description" content="Sugar.css - Forms > Buttons" />
</svelte:head>

<hgroup>
	<h1 aria-label="Forms - Buttons">Forms</h1>
	<h2 aria-hidden="true">Buttons</h2>
</hgroup>

<article aria-label="Buttons documentation and examples">
	<CardCode code={buttonsCode} examplePosition="top"></CardCode>
</article>
