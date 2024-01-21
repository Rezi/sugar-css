<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const hgroupCode = `<hgroup>
	<h1>Main title</h1>
	<h2>Sub title</h2>
</hgroup>
<p>
	Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
	Ex unde ipsam, nihil esse, odio nam reprehenderit impedit cumque.
</p>`;
</script>

<hgroup>
	<h1>Typography</h1>
	<h2>Headings</h2>
</hgroup>

<article>
	<dl style="--dl-width:10rem">
		<dt><h1>Heading 1</h1></dt>
		<dd>
			<code>h1</code> <code>2rem </code>
		</dd>

		<dt><h2>Heading 2</h2></dt>
		<dd>
			<code>h2</code> <code>1.75rem </code>
		</dd>

		<dt><h3>Heading 3</h3></dt>
		<dd>
			<code>h3</code> <code>1.375rem </code>
		</dd>

		<dt><h4>Heading 4</h4></dt>
		<dd>
			<code>h4</code> <code>1.125rem </code>
		</dd>

		<dt><h5>Heading 5</h5></dt>
		<dd>
			<code>h5</code> <code>1rem </code>
		</dd>

		<dt><h6>Heading 6</h6></dt>
		<dd>
			<code>h6</code> <code>1rem </code>
		</dd>
	</dl>
</article>

<article>
	<header>
		<h2>Heading groups</h2>
		<p>
			When headings are used inside <code>hgroup</code> they have no margin. <code>hgroup</code>
			itself has margin bottom <code>--sugar-spacing-block</code> instead
		</p>
	</header>

	<CardCode code={hgroupCode}></CardCode>
</article>
