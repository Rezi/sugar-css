<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const accordionButtonCode = `<details >
	<summary role="button" class="s-secondary">Open for Instant Smiles, Handle With Glee!</summary>
		Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins! 
</details>
<details >
	<summary role="button" class="s-outline">Open for Instant Smiles, Handle With Glee!</summary>
		Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins! 
</details>
<details >
	<summary role="button">Open for Instant Smiles, Handle With Glee!</summary>
		Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!
</details>`;

	const accordionCardCode = `<article>
	<details>
		<summary role="button">Open for Instant Smiles, Handle With Glee!</summary>
		<div>Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!</div>
	</details>
</article>`;

	const accordionCode = `<details open>
	<summary>Open for Instant Smiles, Handle With Glee!</summary>
		Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!
</details>
<details>
	<summary>Open for Instant Smiles, Handle With Glee!</summary>
		Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins! 
</details>`;
</script>

<svelte:head>
	<title>Accordion | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Accordion" />
</svelte:head>

<hgroup>
	<h1>Components</h1>
	<h2>Accordion</h2>
</hgroup>

<article>
	<section>
		<section>
			<p>
				Accordion is base on native HTML elements <code>details</code> and <code>summary</code> which
				have build in toggle behavior:
			</p>
			<dl>
				<dt><code>details</code></dt>
				<dd>
					creates a disclosure widget in which information is visible only when the widget is
					toggled into an <code>open</code> state. A summary or label must be provided using the
					<code>summary</code> element.
				</dd>
				<dt><code>summary</code></dt>
				<dd>
					specifies a summary, caption, or legend for a <code>details</code> element's disclosure
					box. Clicking the <code>summary</code> element toggles the state of the parent
					<code>details</code> element open and closed.
				</dd>
			</dl>
		</section>
		<p>
			By adding or removing the <code>open</code> attribute of the <code>details</code> element you can
			programmatically (by JS) toggle the state of the accordion
		</p>
	</section>

	<CardCode code={accordionCode}></CardCode>

	<hr />

	<section>
		When attribute <code>role="button"</code> is used on the <code>summary</code> element, the accordion
		opener turn into a button:
	</section>
	<CardCode code={accordionButtonCode} examplePosition="top"></CardCode>
	<hr />

	<section>
		When <code>details</code> is only child of <code>article</code> it becomes an article accordion.
		If you wrap the <code>details</code>' content (except <code>summary</code> ) into an element, padding
		is applied to it automatically
	</section>
	<CardCode code={accordionCardCode} examplePosition="top" card={false}></CardCode>
</article>
