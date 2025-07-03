<script>
	import CardCode from '$lib/components/CardCode.svelte';

	const navHeaderCode = `<nav>
	<a href="/">Sugar.scss</a>
	<menu>
		<li><a href="/doc">Getting started</a></li>
		<li><a href="https://github.com/">Github</a></li>
	</menu>
</nav>`;
	const navAsideCode = `<aside>
	<nav>
		<menu>
			<li><a href="#">Layout</a></li>
			<li><a href="#">Navigation</a></li>
			<li><a href="#">Grid</a></li>
		</menu>
	</nav>
<aside>`;
</script>

<svelte:head>
	<title>Menu | Sugar.css</title>
	<meta name="description" content="Sugar.css - Navigation >  Menu" />
</svelte:head>

<hgroup>
	<h1 aria-label="Navigation - Menu">Navigation</h1>
	<h2 aria-hidden="true">Menu</h2>
</hgroup>

<section>
	<nav>
		<menu>
			<li style="--menu-anchor: --menu-a">
				<button popovertarget="menu-a">Hello</button>

				<menu id="menu-a" popover>
					<li style="--menu-anchor: --menu-a-a">
						<button popovertarget="menu-a-a">Storefront</button>
						<menu id="menu-a-a" popover>
							<li><a href="#">a-a Listings</a></li>
							<li><a href="#">a-a Special Offers</a></li>
							<li style="--menu-anchor: --menu-a-a-a">
								<button popovertarget="menu-a-a-a">Storefront</button>
								<menu id="menu-a-a-a" popover>
									<li><a href="#">a-a-a Listings</a></li>
									<li><a href="#">a-a-a Special Offers</a></li>
									<li><a href="#">a-a-a Sign out</a></li>
								</menu>
							</li>
						</menu>
					</li>
					<li style="--menu-anchor: --menu-a-b">
						<button popovertarget="menu-a-b">Storefront</button>
						<menu id="menu-a-b" popover>
							<li><a href="#">a-b Listings</a></li>
							<li><a href="#">a-b Special Offers</a></li>
							<li><a href="#">a-b Sign out</a></li>
						</menu>
					</li>
					<li style="--menu-anchor: --menu-a-c">
						<button popovertarget="menu-a-c">Storefront</button>
						<menu id="menu-a-c" popover>
							<li><a href="#">a-b Listings</a></li>
							<li><a href="#">a-b Special Offers</a></li>
							<li style="--menu-anchor: --menu-a-c-a">
								<button popovertarget="menu-a-c-a">Storefront</button>
								<menu id="menu-a-c-a" popover>
									<li><a href="#">a-a-a Listings</a></li>
									<li><a href="#">a-a-a Special Offers</a></li>
									<li><a href="#">a-a-a Sign out</a></li>
								</menu>
							</li>
						</menu>
					</li>
					<li style="--menu-anchor: --menu-a-d">
						<button popovertarget="menu-a-d">Storefront</button>
						<menu id="menu-a-d" popover>
							<li><a href="#">a-b Listings</a></li>
							<li><a href="#">a-b Special Offers</a></li>
							<li><a href="#">a-b Sign out</a></li>
						</menu>
					</li>
					<li style="--menu-anchor: --menu-a-e">
						<button popovertarget="menu-a-e">Storefront</button>
						<menu id="menu-a-e" popover>
							<li><a href="#">a-b Listings</a></li>
							<li><a href="#">a-b Special Offers</a></li>
							<li><a href="#">a-b Sign out</a></li>
						</menu>
					</li>
					<li><a href="#">a Messages</a></li>
					<li><a href="#">a Messages</a></li>
					<li><a href="#">a Messages</a></li>
				</menu>
			</li>
			<li style="--menu-anchor: --menu-b">
				<button popovertarget="menu-b">Accessible</button>
				<menu id="menu-b" popover>
					<li><a href="#">View Profile</a></li>
					<li><a href="#">Messages</a></li>
					<li><a href="#">Favorites</a></li>
					<li><a href="#">Account Settings</a></li>
					<li style="--menu-anchor: --menu-b-a">
						<button popovertarget="menu-b-a">Storefront</button>
						<menu id="menu-b-a" popover>
							<li><a href="#">b Listings</a></li>
							<li><a href="#">b Special Offers</a></li>
							<li><a href="#">b Sign out</a></li>
						</menu>
					</li>
					<li><a href="#">Account Settings</a></li>
					<li><a href="#">Account Settings</a></li>
					<li><a href="#">Account Settings</a></li>
				</menu>
			</li>
			<li style="--menu-anchor: --menu-c">
				<button popovertarget="menu-c">CSS only Menu</button>
				<menu id="menu-c" popover>
					<li><a href="#">View Profile</a></li>
					<li><a href="#">Messages</a></li>
					<li><a href="#">Favorites</a></li>
					<li><a href="#">Account Settings</a></li>
					<li style="--menu-anchor: --menu-c-a">
						<button popovertarget="menu-c-a">Storefront</button>
						<menu id="menu-c-a" popover>
							<li><a href="#">b Listings</a></li>
							<li><a href="#">b Special Offers</a></li>
							<li><a href="#">b Sign out</a></li>
						</menu>
					</li>
				</menu>
			</li>
		</menu>
	</nav>
</section>

<style lang="scss">
	:root {
		--padding: 1rem;
		--nav-bg: #555;
		--menu-color-text: #fff;
		--menu-line-height: 1.2rem;
		--darken-by: 10%;
	}
	nav:has(> menu) > menu {
		display: flex;
	}
	nav:has(> menu) menu {
		list-style: none;
		margin: 0 !important;
	}
	nav:has(> menu) menu > li:has(> button:first-child) {
		anchor-name: var(--menu-anchor);
	}
	nav:has(> menu) > menu > li menu {
		position: absolute;
		position-anchor: var(--menu-anchor);
		inset-area: bottom span-right;
		position-area: bottom span-right;
		position-try: --left-side;
		width: max-content;
	}
	nav:has(> menu) menu > li > menu > li menu {
		position: absolute;
		inset-area: right span-bottom;
		position-area: right span-bottom;
		position-try: --left, --bottom;
		transition:
			left 0.25s,
			top 0.25s;
	}
	@position-try --bottom {
		inset-area: bottom span-left;
		position-area: bottom span-left;
	}
	@position-try --left {
		inset-area: left span-bottom;
		position-area: left span-bottom;
	}
	@position-try --left-side {
		inset-area: bottom span-left;
		position-area: bottom span-left;
	}
	nav:has(> menu) > menu button {
		width: 100%;
		display: flex;
		gap: 1rem;
		justify-content: space-between;
	}
	nav:has(> menu) > menu > li > :not(menu) {
		padding: var(--padding);
	}
	nav:has(> menu) li > :not(menu):not(button) {
		display: block;
		padding: calc(var(--padding) / 2) var(--padding);
	}
	nav:has(> menu) li:first-child > :first-child {
		padding-top: var(--padding);
	}
	nav:has(> menu) li:last-child > :first-child {
		padding-bottom: var(--padding);
	}

	nav:has(> menu) menu li a,
	nav:has(> menu) menu li a:visited,
	nav:has(> menu) menu li button {
		font-family: system-ui;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.3px;
		border: none;
		background: none;
		color: #000;
		outline-offset: -0.2rem;
		line-height: var(--menu-line-height);
		color: var(--menu-color-text);
		padding-left: var(--padding);
	}
	/* Colors  */
	[popover] {
		color: currentColor;
	}
	nav:has(> menu) > menu {
		color: var(--nav-bg);
	}
	nav:has(> menu) menu {
		overflow: visible;
		color: var(--nav-bg);
		background-color: currentColor;
		border: none;
		padding: 0;
	}
	nav:has(> menu) > menu li {
		background-color: currentColor;
	}
	nav:has(> menu) menu > li:has(> :popover-open) {
		color: color-mix(in srgb, currentColor, black var(--darken-by));
	}
	/* Arrow */
	nav:has(> menu) > menu button:after {
		content: '❯';
		display: block;
		transition: rotate 0.25s;
	}
	nav:has(> menu) > menu li:has(> :popover-open) > button:after {
		rotate: -90deg;
	}
</style>
