<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const formCode = `<form style="--span:3;" class="s-grid">
	<div>
		<label>
			Name
			<input placeholder="Name" type="text" />
		</label>
		<label>
			Email
			<input type="email"  placeholder="Email" />
		</label>
		<div style="--span-6:6;">
			<button>Submit</button>
		</div>
	</div>	
</form>
`;

	const formStatesCode = `<form style="--span:3;" class="s-grid">
	<div>
		<label>
			<input type="text" placeholder="Valid" aria-invalid="false" />
		</label>
		<label>
			<input type="text" placeholder="Invalid" aria-invalid="true" />
		</label>
		<label>
			<input type="text" placeholder="Disabled" disabled />
		</label>
		<label>
			<input type="text" value="Readonly" readonly />
		</label>
		<label>
			<textarea placeholder="Valid" aria-invalid="false" >
			</textarea>
		</label>
		<label>
			<textarea placeholder="Valid" aria-invalid="true" >
			</textarea>
		</label>
	</div>
</form>`;

	const inputButtonCode = `<search>
	<input type="search" name="" aria-label="Search" />
	<button type="submit">Search</button>
</search>`;

	const dateInputsCode = `<div style="--span:6;" class="s-grid">
	<div>
		<label>Date<input type="date" /></label>
		<label>Datetime local<input type="datetime-local" /></label>
		<label>Month<input type="month" /></label>
		<label>Time<input type="time" /></label>
		<label>Week<input type="week" /></label>
	</div>
</div>`;

	const radiosCheckboxesCode = `<div style="--span:6;" class="s-grid">
	<div>
		<label>
			<input type="radio" name="color" value="red" />
			Red
		</label>
		<label>
			<input type="radio" name="color" value="blue" />
			Blue
		</label>
		<label>
			<input type="radio" name="color" value="pink" disabled />
			Pink
		</label>
		<label>
			<input type="checkbox" role="switch" />
			Switch Checkbox
		</label>
		<label><input type="checkbox" />Checkbox</label>
		<label><input type="checkbox" disabled />Disabled Checkbox</label>
	</div>
</div>`;

	const selectCode = `<select>
	<option value="1">Ape</option>
	<option value="2">Elephant</option>
	<option value="3">Jaguar</option>
</select>`;

	const inputsCode = `<div style="--span:6;" class="s-grid">
	<div>
		<label>Text<input type="text" /></label>		
		<label>Number<input type="number" /></label>			
		<label>Password<input type="password" /></label>
		<label>Email<input type="email" /></label>
		<label>Search<input type="search" /></label>
		<label>Tel<input type="tel" /></label>
		<label>Url<input type="url" /></label>
	</div>
</div>`;

	const otherInputsCode = `<div style="--span:6;" class="s-grid">
	<div>	
		<label>Color<input type="color" /></label>
		<label>File<input type="file" /></label>
		<label>Hidden<input type="hidden" /></label>
		<label>Range<input type="range" min="0" max="100" /></label>
	</div>
</div>`;
</script>

<svelte:head>
	<title>Inputs | Sugar.css</title>
	<meta name="description" content="Sugar.css - Forms > Inputs" />
</svelte:head>

<hgroup>
	<h1 aria-label="Forms - Inputs">Forms</h1>
	<h2 aria-hidden="true">Inputs</h2>
</hgroup>

<article aria-label="Forms documentation - inputs">
	<h2>Base Inputs</h2>
	<CardCode code={inputsCode} examplePosition="top"></CardCode>
</article>

<article aria-label="Forms documentation - selectbox">
	<h2>Selectbox</h2>
	<CardCode code={selectCode} examplePosition="top"></CardCode>
</article>

<article aria-label="Forms documentation - non-text inputs">
	<h2>Non-text Inputs</h2>
	<CardCode code={otherInputsCode} examplePosition="top"></CardCode>
</article>

<article aria-label="Forms documentation - date inputs">
	<h2>Date Inputs</h2>
	<CardCode code={dateInputsCode} examplePosition="top"></CardCode>
</article>

<article aria-label="Forms documentation - radios and checkboxes">
	<h2>Radios & Checkboxes</h2>
	<CardCode code={radiosCheckboxesCode} examplePosition="top"></CardCode>
</article>

<article aria-label="Forms documentation - input states">
	<h2>Input states</h2>
	<CardCode code={formStatesCode} examplePosition="top"></CardCode>
</article>

<article aria-label="Forms documentation - input with button combo">
	<h2>Input with Button</h2>
	<section>
		<p>
			If an input is directly followed by a button, their wrapper gets the <code>display:flex;</code
			>
			style, and the button gets <code>max-width: min-content;</code> to match the width of its content.
			Additionally, the border radiuses are collapsed for a seamless appearance.
		</p>
	</section>
	<CardCode code={inputButtonCode} examplePosition="top"></CardCode>
</article>

<article aria-label="Forms documentation - complex form example">
	<h2>Form example</h2>
	<CardCode code={formCode} examplePosition="top"></CardCode>
</article>
