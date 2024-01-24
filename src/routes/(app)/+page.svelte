<script>
	import Logo from '$lib/components/Logo.svelte';
</script>

<svelte:head>
	<title>Sugar.css</title>
	<meta name="description" content="Sugar.css is lightweight class light CSS framework." />
</svelte:head>

<section class="center" style="--size:12rem">
	<Logo>
		<!-- <div slot="top" class="top-square"></div>

		<pre slot="middle" class="middle-square">&lt;h1&gt;
	Sugar.css
&lt;/h1&gt;</pre> -->
	</Logo>
</section>

<hgroup class="hgroup">
	<h1>Sugar.css</h1>
	<h2>Semantic, accessible, lightweight <strong>CSS framework</strong></h2>
</hgroup>

<hr />
<section class="s-grid" style="--span:8;--span-9:3;--gap:2rem;">
	<div>
		<div>
			<h3>Semantic</h3>
			<p>
				Except 5 classes, all styles are applied based on <strong>semantic</strong> HTML and aria
				attributes. This way, <strong>accessible</strong> and easy to read HTML is encouraged.
			</p>
		</div>
		<div>
			<h3>Customizable</h3>
			<p>You can easily adjust look and feel of your very own build of Sugar.css</p>
			<p><a href="customize">Customize your Sugar.css</a></p>
		</div>
		<div>
			<h3>Lightweight</h3>
			<p>
				Whole framework is
				<strong>8.4 kB</strong> g-zipped. Including advanced grid system and custom properties to customize.
			</p>
		</div>
	</div>
</section>
<hr />
<section>
	<h2>Sugar = cutting edge CSS</h2>
	<p>
		In most cases cutting edge technology is desired and endorsed. Unfortunately it is not that easy
		to say about CSS. On one hand, newest CSS brings more features and less code to achieve it. On
		the other hand, it brings worse browser support. If your app is not ready to use some of the
		following CSS features today, you should consider using some more conservative CSS framework.
		All features used by Sugar CSS has support 90% +:
	</p>
	<ul class="cols">
		<li>:has()</li>
		<li>:with()</li>
		<li>aspect-ratio</li>
		<li>color-mix()</li>
		<li>@container queries</li>
		<li>CSS grid</li>
	</ul>
</section>

<style>
	hr {
		margin-block: clamp(2.5rem, 10dvw, 6rem);
	}
	.cols {
		columns: 12rem;
	}

	.center {
		display: grid;
		place-items: center;
	}
	/* 	.middle-square {
		color: var(--s-color-bg);
	}

	.top-square {
		opacity: 0.5;
		border: 5px solid var(--s-color-bg);
		width: calc(var(--size) / 1.3);
		height: calc(var(--size) / 1.3);
		background-image: linear-gradient(var(--s-color-bg), var(--s-color-primary));
	} */

	.hgroup {
		text-align: center;
	}
</style>
