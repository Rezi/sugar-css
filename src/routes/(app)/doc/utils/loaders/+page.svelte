<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const code = `<button type="submit" aria-busy='true'>Search</button>`;
	const codeLink = `<a href="/home" aria-busy='true'>Regular link</a>`;
	const codeSection = `<section aria-busy='true'></section>`;
	const codeGrowingSection = `<section style="height:7rem" aria-busy='true'></section>`;
	const codeProgress = `<section aria-busy='true'>
	<progress role="presentation"></progress>
</section>`;
</script>

<svelte:head>
	<title>Loaders | Sugar.css</title>
	<meta name="description" content="Sugar.css - Utils > Loaders" />
</svelte:head>

<hgroup>
	<h1>Utils</h1>
	<h2>Loaders</h2>
</hgroup>

<article>
	<header>
		Loaders are done via<code>aria-busy</code> attribute. You are responsible to toggle it by
		javascript. Also you need to avoid user submitting buttons or links when they are busy; pointer
		events are disabled by CSS but <kbd>Enter</kbd> cannot be avoided by CSS only, you need to take care
		of it.
	</header>

	<CardCode {code}></CardCode>
	<CardCode code={codeLink}></CardCode>
	<section>
		If <code>aria-busy</code> is used on an empty container element the loader is centered
	</section>
	<CardCode code={codeSection}></CardCode>
	<section>
		In case the loading container is bigger than just line of code, the loader will grow with it up
		to 3rem.
	</section>
	<CardCode code={codeGrowingSection}></CardCode>
	<CardCode code={codeProgress}></CardCode>
	<section>
		If <code>progress</code> is used for showing a loader, please mark it with
		<code>role="presentation"</code>, as it no longer represents a progress in percents.
	</section>
</article>
