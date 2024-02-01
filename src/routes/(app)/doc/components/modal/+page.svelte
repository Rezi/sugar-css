<script>
	import CardCode from '$lib/components/CardCode.svelte';
	import { dialogOpenedStore, modalOpenedStore } from '$lib/stores';

	const dialogCode = `<dialog open>
	<article>
		<header>
			<h3>Dialog title</h3>
			<button type="button" aria-label="Close"></button>
		</header>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit.
	</article>
</dialog>`;

	const dialogNoJsCode = `<dialog>
	<form>
		<article>
			<header>
				<h3>Modal title</h3>
				<button 
					type="submit" 
					formmethod="dialog" 
					aria-label="Close" >
				</button>
			</header>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
			Asperiores vitae officia, voluptatem modi quos quisquam 
			similique tenetur voluptatum, ratione suscipit numquam dolore 
			aperiam molestiae impedit. Ut, maiores? Alias, quos facilis.
			<footer>
				<div class="s-grid" style="--span:3;">
					<div>
						<div>
							<button 
								formmethod="dialog" 
								class="s-secondary" 
								type="submit">
								Cancel
							</button>
						</div>
						<div><button type="submit">Submit</button></div>
					</div>
				</div>
			</footer>
		</article>
	</form>
</dialog>`;
</script>

<svelte:head>
	<title>Modal | Sugar.css</title>
	<meta name="description" content="Sugar.css - Components > Modal" />
</svelte:head>

<hgroup>
	<h1>Components</h1>
	<h2>Modal</h2>
</hgroup>

<section>
	<p>
		The <code>dialog</code> should be a direct child of
		<code>body</code> to ensure good positioning.
	</p>

	<p>
		To display the closing cross, a <code>button</code> with an <code>aria-label</code> needs to be
		added into the header, as shown below. The <code>aria-label</code> provides a translated
		description of the close action. It can be more descriptive, like <em>Close login</em>, etc.,
		depending on the modal window usage.
	</p>
</section>

<article>
	<section>
		<h2>Modal</h2>
		<p>
			The <code>dialog</code> is a version of a popup window that <strong>does</strong> disable interaction
			with the rest of the page.
		</p>
		<p>
			To open the modal, <strong>do not use</strong> the <code>open</code> attribute. Instead, open
			it using JavaScript via
			<code>dialogElement.showModal()</code> function. This way, the <kbd>esc</kbd> functionality is
			enabled by default (no JS needed).
		</p>
		<p>
			In the example below, you can see a <code>form</code> as the wrapper of the article. This way,
			the modal will be auto-closed by a submit button. If you want to close a modal without
			submitting the form, you need to add <code>formmethod="dialog"</code> to the submit button as shown
			below.
		</p>

		<button
			on:click={() => {
				$modalOpenedStore = true;
			}}>Open Modal example</button
		>
	</section>

	<CardCode code={dialogNoJsCode} examplePosition={''} showExample={false}></CardCode>
</article>

<article>
	<section>
		<h2>Dialog</h2>

		<p>
			A dialog is a version of a popup window that <strong>does not</strong> disable interaction with
			the rest of the page.
		</p>
		<p>
			To open a dialog, either use <code>dialogElement.show()</code> or add the <code>open</code>
			attribute to it. Opening and <kbd>esc</kbd> event need to be implemented by JavaScript. Closing
			can be handled by a submit button, as shown in the example above.
		</p>

		<button
			on:click={() => {
				$dialogOpenedStore = true;
			}}>Open Dialog example</button
		>
	</section>

	<CardCode code={dialogCode} examplePosition={''} showExample={false}></CardCode>
</article>
