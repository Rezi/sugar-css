<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const navBreadcrumbCode = `<nav aria-label="breadcrumb">
  <ol>
    <li>
      <a href="#accessibility">
        Accessibility
      </a>
    </li>
    <li>
		<a href="#accessibility/nav">
        Navigation
      </a>
    </li>
    <li>
		<a href="#accessibility/nav/breadcrumb" aria-current="page">
        Breadcrumb
      </a>
    </li>
  </ol>
</nav>`;
</script>

<svelte:head>
	<title>Breadcrumb | Sugar.css</title>
	<meta name="description" content="Sugar.css - Navigation >  Breadcrumb" />
</svelte:head>

<hgroup>
	<h1>Navigation</h1>
	<h2>Breadcrumb</h2>
</hgroup>

<article>
	<section>
		<p>
			<code>aria-current="page"</code> must be applied to the last breadcrumb link to indicate active
			page.
		</p>
		<p><code>aria-label="breadcrumb"</code> must be applied to the <code>nav</code> element.</p>
		<p>You must use <code>ol</code> as the breadcrumb order matters.</p>
	</section>

	<CardCode code={navBreadcrumbCode} examplePosition="top"></CardCode>
</article>
