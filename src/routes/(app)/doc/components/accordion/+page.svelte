<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const accordionButtonCode = `<details >
	<summary role="button" class="s-secondary">Open for Instant Smiles, Handle With Glee!</summary>
		<div>Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!</div>
</details>
<details >
	<summary role="button" class="s-outline">Open for Instant Smiles, Handle With Glee!</summary>
		<div>Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!</div>
</details>
<details >
	<summary role="button">Open for Instant Smiles, Handle With Glee!</summary>
		<div>Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!</div>
</details>`;

	const accordionCardCode = `<article role="presentation">
	<details>
		<summary role="button">Open for Instant Smiles, Handle With Glee!</summary>
		<div>Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!</div>
	</details>
</article>`;

	const accordionCode = `<details open name="accordions">
	<summary>Open for Instant Smiles, Handle With Glee!</summary>
		<div>Welcome to the world of tomorrow!</div>
</details>
<details name="accordions">
	<summary>Open for Instant Smiles, Handle With Glee!</summary>
		<div>Hi there!</div>
</details>
<details name="accordions">
	<summary>Open for Instant Smiles, Handle With Glee!</summary>
		<div>Unleash pure joy with surprise goodies that guarantee laughter. It's happiness in a box—brace
		for grins!</div>
</details>`;
</script>

<svelte:head>
	<title>Accordion | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Accordion" />
</svelte:head>

<hgroup>
	<h1 aria-label="Components - Accordion">Components</h1>
	<h2 aria-hidden="true">Accordion</h2>
</hgroup>

<article role="presentation">
	<section>
		<section>
			<p>
				The accordion is based on native HTML elements <code>details</code> and
				<code>summary</code>, which have built-in toggle behavior:
			</p>
			<dl>
				<dt><code>details</code></dt>
				<dd>
					<p>
						creates a disclosure widget in which information is visible only when the widget is
						toggled into an <code>open</code> state. A summary or label must be provided using the
						<code>summary</code> element.
					</p>
					<p>
						<code>name</code> attribute of the <code>details</code> element is being utilized to
						construct an exclusive accordion, which consists of a set of <code>details</code>
						elements. When a user triggers an action to open one <code>details</code> element, any
						other open <code>details</code> elements with the same <code>name</code> attribute are automatically
						closed.
					</p>
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
			By adding or removing the <code>open</code> attribute of the <code>details</code> element, you
			can programmatically toggle the state of the accordion.
		</p>
	</section>

	<CardCode code={accordionCode}></CardCode>

	<hr />

	<section>
		When the attribute <code>role="button"</code> is used on the <code>summary</code> element, the accordion
		opener turns into a button.
	</section>
	<CardCode code={accordionButtonCode} examplePosition="top"></CardCode>
	<hr />

	<section>
		When a <code>details</code> element is the only child of an <code>article</code>, it becomes an
		article accordion. If you wrap the content of the <code>details</code> (excluding
		<code>summary</code>) into an element, padding is applied to it automatically.
	</section>
	<CardCode code={accordionCardCode} examplePosition="top" card={false}></CardCode>
</article>
