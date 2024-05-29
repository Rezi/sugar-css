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
	<h1 aria-label="Navigation - Breadcrumb">Navigation</h1>
	<h2 aria-hidden="true">Breadcrumb</h2>
</hgroup>

<article aria-label="Breadcrumb documentation">
	<section>
		<p>
			To indicate the active page, apply <code>aria-current="page"</code> to the last breadcrumb link.
		</p>
		<p>
			Apply <code>aria-label="breadcrumb"</code> to the <code>nav</code> element for proper accessibility.
		</p>
		<p>
			Ensure the use of <code>ol</code> as the breadcrumb, as order matters in conveying the hierarchy.
		</p>
	</section>

	<CardCode code={navBreadcrumbCode} examplePosition="top"></CardCode>
</article>
