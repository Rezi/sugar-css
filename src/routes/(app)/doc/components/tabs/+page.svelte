<script lang="ts">
	import CardCode from '$lib/components/CardCode.svelte';
	let tabSelectedA = 'car';
	let tabSelectedB = 'car';

	const tabsCode = `<article>
	<h2>Tabs</h2>
	<div role="tablist">
		<button aria-controls="car" aria-selected="true" id="tab-car" role="tab"> 
			Car 
		</button>
		<button aria-controls="bus" aria-selected="false" id="tab-bus" role="tab" tabindex="-1">
			Bus
		</button>
		<button aria-controls="bike" aria-selected="false" id="tab-bike" role="tab" tabindex="-1">
			Bike
		</button>
	</div>

	<div aria-labelledby="tab-car" id="car" role="tabpanel">
		The sleek silver sedan hummed softly as it glided down the winding
		mountain road, its headlights piercing through the darkness.
	</div>

	<div aria-labelledby="tab-bus" id="bus" role="tabpanel" hidden>
		The bustling city bus rumbled along, filled with a diverse array 
		of passengers, each lost in their own thoughts amidst the rhythmic 
		sway of the journey.
	</div>

	<div aria-labelledby="tab-bike" id="bike" role="tabpanel" hidden>
		The vibrant red bike leaned against the old oak tree, its tires 
		still warm from the afternoon ride, while the sun cast long shadows 
		across the quiet suburban street.
	</div>
	<div>If there is a following element after last <code>role="tabpanel"</code> gap is added automatically.</div>
</article>`;

	const tabsArticleCode = `<article>
	<div role="tablist">
		<button aria-controls="car" aria-selected="true" id="tab-car" role="tab"> 
			Car 
		</button>
		<button aria-controls="bus" aria-selected="false" id="tab-bus" role="tab" tabindex="-1">
			Bus
		</button>
		<button aria-controls="bike" aria-selected="false" id="tab-bike" role="tab" tabindex="-1">
			Bike
		</button>
	</div>

	<div aria-labelledby="tab-car" id="car" role="tabpanel">
		The sleek silver sedan hummed softly as it glided down the winding
		mountain road, its headlights piercing through the darkness.
	</div>

	<div aria-labelledby="tab-bus" id="bus" role="tabpanel" hidden>
		The bustling city bus rumbled along, filled with a diverse array 
		of passengers, each lost in their own thoughts amidst the rhythmic 
		sway of the journey.
	</div>

	<div aria-labelledby="tab-bike" id="bike" role="tabpanel" hidden>
		The vibrant red bike leaned against the old oak tree, its tires 
		still warm from the afternoon ride, while the sun cast long shadows 
		across the quiet suburban street.
	</div>
</article>`;

	const tabs = [
		{
			key: 'car',
			title: 'Car',
			text: `The sleek silver sedan hummed softly as it glided down the winding mountain road, its headlights piercing through the darkness.`
		},
		{
			key: 'bus',
			title: 'Bus',
			text: `The bustling city bus rumbled along, filled with a diverse array of passengers, each lost in their own thoughts amidst the rhythmic sway of the journey.`
		},
		{
			key: 'bike',
			title: 'Bike',
			text: `The vibrant red bike leaned against the old oak tree, its tires still warm from the afternoon ride, while the sun cast long shadows across the quiet suburban street.`
		}
	];

	const ArrowKeyCodes = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];

	function selectTab(allMenuItems: NodeListOf<Element>, index: number) {
		const nextEl = allMenuItems.item(index) as HTMLElement;
		nextEl.focus();
		nextEl.click();
	}

	const menuKeyCodes = {
		ArrowLeft: (el: HTMLElement) => {
			const { allMenuItems, activeIndex } = getActiveMenuItem(el);
			const newIndex = 0 === activeIndex ? allMenuItems.length - 1 : activeIndex - 1;
			selectTab(allMenuItems, newIndex);
		},
		ArrowRight: (el: HTMLElement) => {
			const { allMenuItems, activeIndex } = getActiveMenuItem(el);
			const newIndex = allMenuItems.length - 1 === activeIndex ? 0 : activeIndex + 1;
			selectTab(allMenuItems, newIndex);
		},
		Home: (el: HTMLElement) => {
			const { allMenuItems } = getActiveMenuItem(el);
			selectTab(allMenuItems, 0);
		},
		End: (el: HTMLElement) => {
			const { allMenuItems } = getActiveMenuItem(el);
			selectTab(allMenuItems, allMenuItems.length - 1);
		}
	};

	type AllowedNavKeys = keyof typeof menuKeyCodes;

	function getActiveMenuItem(el: HTMLElement) {
		const list = el.parentElement as HTMLElement;

		const allMenuItems = list.querySelectorAll(':scope > [role="tab"]');
		let activeIndex = 0;
		allMenuItems.forEach((menuItem, index) => {
			if (menuItem === el) {
				activeIndex = index;
			}
		});

		return { allMenuItems, activeIndex };
	}

	const keyDownHandler = (event: KeyboardEvent) => {
		if (document.activeElement) {
			const tablist = document.activeElement?.closest('#tablist') as HTMLElement;
			if (tablist) {
				const keyPressedCode = event.code;
				if ([...ArrowKeyCodes].includes(keyPressedCode)) {
					event.preventDefault();
				}

				const currEl = document.activeElement as HTMLElement;
				if (ArrowKeyCodes.includes(keyPressedCode)) {
					menuKeyCodes[keyPressedCode as AllowedNavKeys](currEl);
				}
			}
		}
	};
</script>

<svelte:head>
	<title>Tabs | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Tabs" />
</svelte:head>
<svelte:document on:keydown={keyDownHandler} />

<hgroup>
	<h1>Components</h1>
	<h2>Tabs</h2>
</hgroup>

<article>
	<section>
		<p>
			Properly implementing tabs requires a comprehensive set of ARIA attributes to ensure
			accessibility. These ARIA attributes not only facilitate styling but also enhance
			accessibility:
		</p>
		<dl style="--dl-width: 11rem;">
			<dt><code>role="tablist"</code></dt>
			<dd>Defines the container for tab headers.</dd>
			<dt><code>role="tab"</code></dt>
			<dd>
				Indicates a tab element, which should be a <code>button</code> and a direct child of
				<code>role="tablist"</code>. The selected tab is identified with
				<code>aria-selected="true"</code>
				or <code>false</code> accordingly.
			</dd>
			<dt><code>role="tabpanel"</code></dt>
			<dd>
				Used for the contents that are switched by the tab buttons. Inactive content should be
				hidden (<code>hidden</code>).
			</dd>
		</dl>
		<p>
			In addition to the aforementioned styling attributes, it's essential to include <code
				>aria-controls</code
			>, <code>aria-labelledby</code>, and <code>id</code> attributes for tabs and tab panels to ensure
			proper support for screen readers.
		</p>
	</section>

	<CardCode code={tabsCode} withSlot={true} resizable={true} examplePosition="top">
		<h2>Tabs</h2>
		<div role="tablist" id="tablist">
			{#each tabs as tab, index}
				<button
					aria-controls={tab.key}
					on:click={() => {
						tabSelectedA = tab.key;
					}}
					aria-selected={tab.key === tabSelectedA ? 'true' : 'false'}
					id="tab-{tab.key}"
					role="tab"
					tabindex={index ? -1 : 0}
				>
					{tab.title}
				</button>
			{/each}
		</div>

		{#each tabs as tab}
			<div
				aria-labelledby="tab-{tab.key}"
				id={tab.key}
				role="tabpanel"
				hidden={tab.key !== tabSelectedA}
			>
				{tab.text}
			</div>
		{/each}
		<div>
			If there is an element following the last <code>role="tabpanel"</code>, a gap is automatically
			added.
		</div>
	</CardCode>
</article>
<article>
	<section>
		If the tabs with <code>role="tablist"</code> and <code>role="tabpanel"</code> are the only
		children of an <code>article</code>, the tabs will expand to occupy all of the article's space.
	</section>

	<CardCode code={tabsArticleCode} withSlot={true} resizable={true} examplePosition="top">
		<div role="tablist" id="tablist">
			{#each tabs as tab, index}
				<button
					aria-controls={tab.key}
					on:click={() => {
						tabSelectedB = tab.key;
					}}
					aria-selected={tab.key === tabSelectedB ? 'true' : 'false'}
					id="tab-{tab.key}"
					role="tab"
					tabindex={index ? -1 : 0}
				>
					{tab.title}
				</button>
			{/each}
		</div>

		{#each tabs as tab}
			<div
				aria-labelledby="tab-{tab.key}"
				id={tab.key}
				role="tabpanel"
				hidden={tab.key !== tabSelectedB}
			>
				{tab.text}
			</div>
		{/each}
	</CardCode>
</article>
