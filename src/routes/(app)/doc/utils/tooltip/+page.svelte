<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const code = `<label>
	Username:
	<input aria-describedby="username-tooltip" type="text" />
	<div role="tooltip" id="username-tooltip">
		Username cannot be an email
	</div>
</label>`;

	const codeAll = `<div class="s-grid" style="--span:8">
	<div>
		<label>
			Text:
			<textarea aria-describedby="text-tooltip"></textarea>
			<span role="tooltip" id="text-tooltip">
				Write something nice and polite here. See, I break into multiple lines
			</span>
		</label>
		<label>
			How are you?
			<select aria-describedby="select-tooltip">
				<option label=" "></option>
				<option value="z">Sleepy</option>
				<option value="zzz">Already sleeping</option>
			</select>
			<span role="tooltip" id="select-tooltip">
				Don't leave me empty
			</span>
		</label>
		<span>
			<a href="#" aria-describedby="link-tooltip">Link</a>
			<span role="tooltip" id="link-tooltip">
				I lead to nowhere!
			</span>
		</span>
		<span>
			<button aria-describedby="button-tooltip">Button</button>
			<span role="tooltip" id="button-tooltip">
				Don't press me yet
			</span>
		</span>
	</div>
</div>`;
</script>

<svelte:head>
	<title>Tooltip | Sugar.css</title>
	<meta name="description" content="Sugar.css - Utils > Tooltip" />
</svelte:head>

<hgroup>
	<h1 aria-label="Utils - tooltip">Utils</h1>
	<h2 aria-hidden="true">Tooltip</h2>
</hgroup>

<article aria-label="Tooltips documentation">
	<section>
		<h3>Tooltip Implementation Limitations</h3>

		<p>Accessible tooltips should fulfill the following criteria:</p>
		<ol>
			<li>Present additional information about an associated element</li>
			<li>Be visible on hover and focus</li>
			<li>Allow mouse over the tooltip without dismissing it</li>
			<li>Be closable by <kbd>esc</kbd> button</li>
			<li>Remain visible until manually dismissed</li>
		</ol>

		<h3>Your responsibilities:</h3>

		<ul>
			<li>
				As you can see, the last 2 criteria require JavaScript. <strong
					>You are fully responsible for implementing those on your own.</strong
				>
			</li>
			<li>
				Focus criteria only apply to focusable elements like <code>a</code>, <code>button</code>,
				<code>input</code>,
				<code>textarea</code>,
				<code>select</code>, <code>[contentEditable]</code>, and <code>iframe</code>. Do not use
				tooltips with any other element.
			</li>
			<li>
				Tooltips do not work at all on submit <code>button</code> and <code>a</code> link when used on
				touch screen devices (The tooltip is not shown as the touch triggers the element's native action
				at the same time).
			</li>
		</ul>

		<p>
			Note that any wrapper element directly containing elements with <code>[aria-describedby]</code
			>
			and <code>[role='tooltip']</code> (in the example below it is the <code>label</code>) is
			styled with <code>position:relative</code>.
		</p>

		<p>
			<em>Please use with caution! The best tooltip is often no tooltip.</em>
		</p>
	</section>

	<CardCode {code} language="xml"></CardCode>

	<CardCode code={codeAll} language="xml"></CardCode>
	<section>
		<p>Tooltip has <code>max-width: 25rem</code></p>
		<p>
			By default, a tooltip is positioned at <mark>bottom end</mark> to avoid overlapping content.
			Only in the case of <code>a</code>, the tooltip is at <mark>bottom start</mark>.
		</p>
	</section>
</article>
