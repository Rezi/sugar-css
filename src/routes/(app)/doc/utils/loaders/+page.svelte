<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const code = `<button type="submit" aria-busy='true' inert>Search</button>`;
	const codeLink = `<a href="/home" aria-busy='true' inert>Regular link</a>`;
	const codeSection = `<section aria-busy='true' inert></section>`;
	const codeGrowingSection = `<section style="height:7rem" aria-busy='true' inert></section>`;
	const codeProgress = `<section aria-busy='true' inert>
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
		Loaders are managed using the <code>aria-busy</code> attribute. You are responsible for toggling
		it with JavaScript. Additionally, ensure users cannot submit buttons or links when they are
		busy; pointer events are disabled by CSS, but the <kbd>Enter</kbd> key cannot be avoided by CSS
		alone. You need to handle it with JavaScript. Or perhaps by
		<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert"
			>the new inert HTML attribute</a
		>.
	</header>

	<CardCode {code}></CardCode>
	<CardCode code={codeLink}></CardCode>
	<section>
		If <code>aria-busy</code> is used on an empty container element, the loader is centered.
	</section>
	<CardCode code={codeSection}></CardCode>
	<section>
		In case the loading container is larger than just a line of code, the loader will grow with it,
		up to a maximum size of 3rem.
	</section>
	<CardCode code={codeGrowingSection}></CardCode>
	<CardCode code={codeProgress}></CardCode>
	<section>
		If <code>progress</code> is used for showing a loader, mark it with
		<code>role="presentation"</code>, as it no longer represents progress in percentages.
	</section>
</article>
