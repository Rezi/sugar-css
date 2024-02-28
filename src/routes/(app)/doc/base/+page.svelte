<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const codeFontSizing = `@media screen and (min-width: 320px) {
	:where(html) {
		font-size: calc(100% + (2 * ((100vw - 320px) / 960)));
	}
}

@media screen and (min-width: 1280px) {
	:where(html) {
		font-size: calc(100% + 2px + (54 * ((100vw - 1280px) / 10000)));
	}
}`;

	const codeMargin = `/* Sugar Doesn't apply margin top to following */

:where(h1, h2, h3, h4, h5, h6, hgroup, dl, article, section, table, p) {
	margin-block-start: 0;
}

/* Sugar Doesn't apply margin bottom to following :last-child */

:where(h1, h2, h3, h4, h5, h6, hgroup, dl, article, section, table, p, [role='tabpanel']):last-child {
	margin-block-end: 0;
}
`;
</script>

<svelte:head>
	<title>Sizes & Margins | Sugar.css</title>
	<meta name="description" content="Sugar.css - Sizes & Margins" />
</svelte:head>

<h1>Sizes & Margins</h1>

<section>
	In addition to conventional CSS reset practices — such as eliminating the 8px margin from the body
	and setting <code>box-sizing</code> to <code>border-box</code> — Sugar.css introduces two
	distinctive opinionated rules:
	<ol>
		<li>
			<strong>Poly Fluid Font Sizing:</strong> Sugar.css adopts a poly fluid font sizing approach, offering
			a more dynamic and adaptable typography experience.
		</li>
		<li>
			<strong>Redefined Default Margins:</strong> The default margins are redefined to align with Sugar.css's
			opinionated design principles, ensuring consistency and improved layout control.
		</li>
	</ol>
</section>

<article>
	<header><h2>Poly fluid font sizing</h2></header>

	<p>
		Sugar.css employs a poly fluid font sizing technique, dynamically scaling font size in tandem
		with screen dimensions. The code snippet below illustrates using the default browser font size
		16px (100%), progressively increasing it to 18px as the screen width ranges from 320px to
		1280px. Beyond 1280px, the font growth accelerates even further.
	</p>
	<CardCode code={codeFontSizing} language="css" examplePosition={''}></CardCode>

	<p>
		Setting the font size on the <code>HTML</code> element influences all elements sized in
		<code>rem</code>
		units throughout the document. Given that Sugar.css predominantly uses <code>rem</code> for sizing,
		all spacings gradually adjust with the font size. Once the 1280px threshold is surpassed, everything—including
		the grid system—scales proportionally to the screen size. This ensures that if your web content looks
		appealing on a 1280px wide monitor, it will maintain its visual integrity on larger screens, including
		16K monitors.
	</p>
	<p>
		If this technique doesn't fit your needs, removing it from Sugar.css does not break anything,
		you just lose the built-in auto-adjustment for bigger screens.
	</p>
</article>

<article>
	<header><h2>Margins</h2></header>

	<section>
		<h3>TLTR - Sugar's margins</h3>
		<p>
			<strong>Direction of Margins:</strong> Sugar.css mainly applies margins to the bottom of elements
			rather than the top. The last element within its parent, which would typically have a margin bottom,
			is intentionally devoid of such a margin.
		</p>
		<h3>Browser Defaults and Drawbacks:</h3>
		<p>
			Originating in the early '90s, default HTML margins were introduced to enhance readability in
			the absence of CSS. Initially, both top and bottom margins were applied to establish
			consistent spacing, ensuring a margin from both the top and bottom of a page. However, to
			prevent excessive spacing, margin collapsing was introduced. This occurred when two
			consecutive elements had margins, providing a neat and simple solution. Unfortunately, this
			came at the cost of developers relinquishing full control over the spacing.
		</p>
		<p>
			As layouts became more sophisticated, the ability to implement paddings on content wrappers,
			such as cards and menus, became increasingly advantageous. Simultaneously, a new consideration
			emerged: envision a card endowed with its own padding. This card, when filled solely with
			text, contrasts with another instance containing a <code>p</code> element and yet another with
			a <code>h1</code>. Upon observation, it becomes evident that the space between the bottom edge
			of the card and its content varies across the three scenarios. However, this discrepancy may
			not align with one's expectations. It would be more desirable for the spacing to remain
			consistent in all three instances.
		</p>
		<h3>Solution: no margin top</h3>
		<p>
			A straightforward solution involves refraining from using the default margin bottom on the
			last element within its wrapper and abstaining from applying margin top to any element
			altogether.
		</p>
	</section>

	<CardCode code={codeMargin} language="css" examplePosition={''}></CardCode>
	<section>
		<h3>Sugar's margin defaults</h3>
		<p>There are two main groups of spacing sizes.</p>
		<dl>
			<dt><code>1rem</code></dt>
			<dd>
				Elements like <code>p, ul, ol, dl, menu, details</code>
				have spacing <code>1rem/1em</code>.
			</dd>

			<dt><code>2.5rem</code></dt>
			<dd>
				More visually separated elements like
				<code>table, article, hr, section, hgroup</code>
				use even bigger default spacing: <code>--sugar-spacing-block: 2.5rem</code>
			</dd>
		</dl>
	</section>
</article>

<style>
</style>
