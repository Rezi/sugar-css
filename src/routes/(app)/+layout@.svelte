<script lang="ts">
	let asideWidth: number;
	let menuOpened = false;
	let focusedInAsideNavigation = false;
	let docWidth: number;

	$: collapsibleMenu = asideWidth > 200 && docWidth < 1200;

	const menuKeyCodes = {
		ArrowDown: (el: HTMLElement) => {
			const { allMenuItems, activeIndex } = getActiveMenuItem(el);
			const newIndex = allMenuItems.length - 1 === activeIndex ? 0 : activeIndex + 1;
			(allMenuItems.item(newIndex) as HTMLElement).focus();
		},
		ArrowUp: (el: HTMLElement) => {
			const { allMenuItems, activeIndex } = getActiveMenuItem(el);
			const newIndex = 0 === activeIndex ? allMenuItems.length - 1 : activeIndex - 1;
			(allMenuItems.item(newIndex) as HTMLElement).focus();
		},
		ArrowLeft: (el: HTMLElement) => {
			const parentButton = el.parentElement?.parentElement?.previousElementSibling as HTMLElement;
			if (
				parentButton?.tagName.toLowerCase() === 'button' &&
				parentButton.closest('#side-navigation')
			) {
				const ariaControlsId = parentButton.getAttribute('aria-controls') as MenuName;
				toggleMenu(ariaControlsId);
				setTimeout(() => {
					parentButton.focus();
				});
			} else {
				el.focus();
			}
		},
		ArrowRight: (el: HTMLElement) => {
			if (el.tagName.toLowerCase() === 'button') {
				const ariaControlsId = el.getAttribute('aria-controls') as MenuName;
				toggleMenu(ariaControlsId, false, true);
				setTimeout(() => {
					const submenu = el.nextElementSibling;
					(submenu as HTMLElement).querySelector('a')?.focus();
				});
			} else {
				el.focus();
			}
		},
		Home: (el: HTMLElement) => {
			const { allMenuItems } = getActiveMenuItem(el);
			(allMenuItems.item(0) as HTMLElement).focus();
		},
		End: (el: HTMLElement) => {
			const { allMenuItems } = getActiveMenuItem(el);
			(allMenuItems.item(allMenuItems.length - 1) as HTMLElement).focus();
		},
		Space: () => {},
		Enter: () => {}
	};

	const ArrowKeyCodes = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];

	function getActiveMenuItem(el: HTMLElement) {
		const list = el.parentElement?.parentElement as HTMLElement;
		const allMenuItems = list.querySelectorAll(':scope > li > a, :scope > li > button');
		let activeIndex = 0;
		allMenuItems.forEach((menuItem, index) => {
			if (menuItem === el) {
				activeIndex = index;
			}
		});

		return { allMenuItems, activeIndex };
	}

	type AllowedNavKeys = keyof typeof menuKeyCodes;

	const keyUpHandler = (event: KeyboardEvent) => {
		const sideNavigation = document.activeElement?.closest('#side-navigation') as HTMLElement;

		if (!focusedInAsideNavigation && sideNavigation) {
			const firstFocusableElement = sideNavigation.querySelector('button, a') as HTMLInputElement;
			firstFocusableElement?.focus();
		}

		focusedInAsideNavigation = !!sideNavigation;
	};

	const keyDownHandler = (event: KeyboardEvent) => {
		const sideNavigation = document.activeElement?.closest('#side-navigation') as HTMLElement;
		if (sideNavigation) {
			const keyPressedCode = event.code;
			if ([...ArrowKeyCodes, 'Space', 'Home', 'End'].includes(keyPressedCode)) {
				event.preventDefault();
			}
			// set inert
			sideNavigation?.setAttribute('inert', 'inert');

			document.activeElement?.addEventListener(
				'blur',
				(blurEvent: Event) => {
					//remove inert
					sideNavigation?.removeAttribute('inert');

					const currEl = blurEvent.target as HTMLElement;
					const currentElName = currEl.tagName.toLowerCase();
					if (ArrowKeyCodes.includes(keyPressedCode)) {
						menuKeyCodes[keyPressedCode as AllowedNavKeys](currEl);
					} else if (['Space', 'Enter'].includes(keyPressedCode) && currentElName === 'button') {
						menuKeyCodes.ArrowRight(currEl);
					} else if (keyPressedCode === 'Space' && currentElName === 'a') {
						currEl.click();
					}
				},
				{ once: true }
			);
		}
	};

	type MenuName =
		| 'typography'
		| 'layout'
		| 'base'
		| 'navigation'
		| 'grid'
		| 'tables'
		| 'forms'
		| 'components'
		| 'utils'
		| 'customization';

	type MenuItem = {
		headline: string;
		key: MenuName;
		isExpanded?: boolean;
		links?: { name: string; url: string }[];
		url?: string;
		newBlock?: boolean;
	};

	let menuItems: MenuItem[] = [
		{
			headline: 'Sizes & Margins',
			key: 'base',
			url: '/doc/base'
		},
		{
			headline: 'Layout & Themes',
			key: 'layout',
			url: '/doc/layout'
		},
		{
			headline: 'Typography',
			key: 'typography',
			isExpanded: false,
			links: [
				{ name: 'Headings', url: '/doc/typography/headings' },
				{ name: 'Inline elements', url: '/doc/typography/inline' }
			]
		},
		{
			headline: 'Navigation',
			key: 'navigation',
			isExpanded: false,
			links: [
				{ name: 'Breadcrumb', url: '/doc/navigation/breadcrumb' },
				{ name: 'Menu', url: '/doc/navigation/menu' }
			]
		},
		{
			headline: 'Forms',
			key: 'forms',
			isExpanded: false,
			links: [
				{ name: 'Inputs', url: '/doc/forms/inputs' },
				{ name: 'Buttons', url: '/doc/forms/buttons' }
			]
		},
		{
			headline: 'Grid',
			key: 'grid',
			isExpanded: false,
			links: [
				{ name: 'About', url: '/doc/grid/about' },
				{ name: 'API', url: '/doc/grid/api' },
				{ name: 'Examples', url: '/doc/grid/examples' },
				{ name: 'Layout', url: '/doc/grid/layout' }
			]
		},
		{
			headline: 'Components',
			key: 'components',
			isExpanded: false,
			links: [
				{ name: 'Accordion', url: '/doc/components/accordion' },
				{ name: 'Card', url: '/doc/components/card' },
				{ name: 'Block Quote', url: '/doc/components/block-quote' },
				{ name: 'Figure', url: '/doc/components/figure' },
				{ name: 'Horizontal rule', url: '/doc/components/horizontal-rule' },
				{ name: 'Lists', url: '/doc/components/lists' },
				{ name: 'Modal', url: '/doc/components/modal' },
				{ name: 'Progress bar', url: '/doc/components/progress' },
				{ name: 'Tabs', url: '/doc/components/tabs' }
			]
		},
		{
			headline: 'Utils',
			key: 'utils',
			isExpanded: false,
			links: [
				{ name: 'Loaders', url: '/doc/utils/loaders' },
				{ name: 'Tooltip', url: '/doc/utils/tooltip' }
			]
		},
		{
			headline: 'Tables',
			key: 'tables',
			url: '/doc/tables'
		},
		{
			headline: 'Customization',
			key: 'customization',
			url: '/customize',
			newBlock: true
		}
	];

	function toggleMenu(menuName: MenuName, isHover = false, alwaysOpen = false) {
		const menuItem = menuItems.find((item) => item.key === menuName);
		if (menuItem) {
			menuItem.isExpanded = alwaysOpen || !menuItem.isExpanded;
		}

		menuItems = [...menuItems];
	}
</script>

<svelte:document on:keydown={keyDownHandler} on:keyup={keyUpHandler} />
<svelte:window bind:innerWidth={docWidth} />

<div class="s-grid">
	<div>
		<aside style="--span:9;--span-11:2;" bind:clientWidth={asideWidth}>
			{#if collapsibleMenu}
				<button
					class="menu-button"
					aria-haspopup="true"
					aria-expanded={menuOpened ? 'true' : 'false'}
					on:click={() => {
						menuOpened = !menuOpened;
					}}
					>Documentation

					<span class="burger"><span></span></span></button
				>
			{/if}

			<nav
				aria-label="Documentation navigation"
				class:shown={!collapsibleMenu || menuOpened}
				inert={collapsibleMenu && !menuOpened}
			>
				<menu id="side-navigation">
					{#each menuItems as menu}
						<li style={menu.newBlock ? 'margin-top:1rem;' : ''}>
							{#if menu.links}
								<button
									aria-haspopup="true"
									aria-expanded={menu.isExpanded}
									aria-controls={menu.key}
									on:pointerdown={() => toggleMenu(menu.key)}>{menu.headline}</button
								>
								<ul hidden={!menu.isExpanded} id={menu.key}>
									{#each menu.links as link}
										<li>
											<a
												href={link.url}
												on:click={() => {
													menuOpened = false;
												}}>{link.name}</a
											>
										</li>{/each}
								</ul>
							{:else}
								<a
									href={menu.url}
									on:click={() => {
										menuOpened = false;
									}}>{menu.headline}</a
								>
							{/if}
						</li>
					{/each}
				</menu>
			</nav>
		</aside>
		<main style="--span:9;" aria-label="Documentation content"><slot /></main>
	</div>
</div>

<style lang="scss">
	.menu-button {
		width: max-content;
		position: relative;
		top: calc(var(--sugar-spacing-block) * -1 + 1rem);
	}

	.menu-button[aria-expanded='true'] {
		.burger {
			span {
				opacity: 0;
			}

			&:before {
				transform: translateY(0rem) rotate(45deg);
			}
			&:after {
				transform: translateY(0rem) rotate(-45deg);
			}
		}
	}
	.burger {
		margin-inline-start: 1rem;
		width: 2.5rem;
		--height: 0.25rem;
		position: relative;
		transform: translateY(calc(var(--height) / -2));

		span,
		&:before,
		&:after {
			position: absolute;
			transition: all 0.5s;
			display: block;
			content: '';
			border-radius: calc(var(--height) / 2);
			width: 100%;
			height: var(--height);
			background-color: var(--s-color-primary-contrast);
		}

		&:before {
			transform: translateY(-0.75rem) rotate(0deg);
		}
		&:after {
			transform: translateY(0.75rem) rotate(0deg);
		}
	}
	aside {
		position: relative;
	}

	aside nav {
		position: sticky;
		top: 6.8rem;
		display: none;

		&.shown {
			display: block;
		}
	}

	aside menu button {
		background: none;
		border: 0;
		color: var(--s-color-primary);
		padding: 0;
		display: inline;
		width: auto;
		outline-offset: var(--s-focus-offset);
	}

	aside menu button::after {
		--chevron-size: 0.6rem;
		content: '';
		margin-inline-end: 0.3rem;
		width: var(--chevron-size);
		height: var(--chevron-size);
		border: solid currentColor;
		border-width: 0;
		border-inline-start-width: var(--sugar-border-width-plus);
		border-block-end-width: var(--sugar-border-width-plus);
		transform: translateX(0.25rem) rotate(-135deg);
		transition: transform 0.3s;
		display: inline-block;
	}

	[dir='rtl'] {
		aside menu button::after {
			transform: translateX(-0.25rem) rotate(135deg);
		}
	}

	aside menu ul {
		list-style: none;
		margin: 0.5rem 0;
		padding-inline-start: 1.5rem;
	}
</style>
