<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const codeFontSizing = `:where(html) {
	font-size: 16px;
}

@media screen and (min-width: 320px) {
	:where(html) {
		font-size: calc(16px + 2 * ((100vw - 320px) / 960));
	}
}

@media screen and (min-width: 1280px) {
	:where(html) {
		font-size: calc(18px + 54 * ((100vw - 1280px) / 10000));
	}
}
`;

	const codeMargin = `/* Don't apply margin top to following */

:where(h1, h2, h3, h4, h5, h6, hgroup, dl, article, section, table, p) {
	margin-block-start: 0;
}

/* Don't apply margin bottom to a last child */

:where(h1, h2, h3, h4, h5, h6, hgroup, dl, article, section, table, p):last-child {
	margin-block-end: 0;
}
`;
</script>

<h1>Sizes & Margins</h1>

<section>
	Beside common CSS reset rules like removing 8px <code>margin</code> from <code>body</code>,
	setting <code>box-sizing </code> to <code>border-box</code>, there are two major opinionated
	rules: <strong>Poly fluid font sizing</strong> and redefined default <strong>Margins</strong>
</section>

<article>
	<header><h2>Poly fluid font sizing</h2></header>
	<section>
		<p>
			This technique enable us to scale font size dynamically together with screen size. The code
			shown below sets default font size to 16px, and enlarges it towards 18px as the screen width
			scales from 320px to 1280px. After that font starts growing even faster.
		</p>
		<p>
			As the font size is set on <code>HTML</code> element, it also influences everything sized in
			<code>rem</code> units in whole document. As almost everything in Sugar.css is sized in
			<code>rem</code>, all spacings are slowly growing with the font size. Once 1280px is surpassed
			everything (even grid system) starts scaling up in a pace that the page is growing 1:1 to the
			screen size. If your web looks good on 1280px wide monitor, it will looks great on 16K monitor
			as well.
		</p>
	</section>
	<CardCode code={codeFontSizing} language="css" examplePosition={''}></CardCode>
</article>

<article>
	<header><h2>Margins</h2></header>

	<section>
		<h3>TLTR - Sugar's margins</h3>
		<p>
			Margins are mostly applied to bottom of elements and not to top of them (see those elements
			listed in code example below). <strong
				>Last element of its parent which would normally have margin bottom, has no margin bottom
				instead</strong
			>
		</p>
		<h3>Browser defaults and why they are not good</h3>
		<p>
			To understand why default margins are set in a way, they are, we need to go back to the
			origins of HTML to early 90s. That time there was no CSS. In order to make the web pages
			easier to read, default styles were applied. To make nice spacings without any custom styling,
			elements got <em>margin</em>
			top and bottom at the same time. To avoid huge gaps when elements like <code>h1</code> and
			<code>p</code>
			were added one below each other, margin collapsing was applied (smaller of two block-margins was
			ignored). It solved issues like <code>h1</code> touching border of page when used as 1st
			element in <code>body</code> etc.
		</p>
		<p>
			Later when more complex layouts started to be possible, it becomes handy to apply paddings on
			content wrappers like cards menus etc. At the same time new appeared: Imagine a card with its
			own padding, which is only filled with text, another instance of such a card has <code>p</code
			>
			element and another has <code>h1</code>. You could see that the space between the bottom edge
			of the card and its content differs in all three cases. But its probably not what one would
			expect. It would be better if the spacing is the same in all 3 cases.
		</p>
		<h3>Solution: no margin top</h3>
		<p>
			The simple solution is to avoid default margin bottom on a last element of its wrapper and do
			not apply margin top on any of the elements below. Then whe wrapper's padding is the only
			margin between wrapper and its content.
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
