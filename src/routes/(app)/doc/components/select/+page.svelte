<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const selectCode = `<select >
		<button>
        <selectedcontent></selectedcontent>
      </button>
	  
	<option value="1">Value 1</option>
	<option value="2">Value 2</option>
	<option value="3">Value 3</option>
</select>`;
</script>

<svelte:head>
	<title>Select | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Select" />
</svelte:head>

<hgroup>
	<h1 aria-label="Components - Select">Components</h1>
	<h2 aria-hidden="true">Select</h2>
</hgroup>

<article role="presentation">
	<section>
		<section>
			<p>
				<code>select</code> is regular html form element with newly available styles applied to it.
			</p>
			<dl>
				<dt><code>select</code></dt>
				<dd>
					<p>is regular html form element with newly available styles applied to it.</p>
				</dd>
				<dt><code>option</code></dt>
				<dd>
					<p>represent value to be chosen in the select</p>
				</dd>
			</dl>
		</section>

		<p>
			<code>svg</code> can be used inside option to add extra icon to the <code>option</code>
		</p>
	</section>

	<CardCode code={selectCode}></CardCode>
</article>
