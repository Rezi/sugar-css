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

<hgroup>
	<h1>Components</h1>
	<h2>Modal</h2>
</hgroup>

<section>
	<p>
		Dialog should be a direct child of
		<code>body</code>, to ensure good positioning.
	</p>
	<p>
		To show closing cross, <code>button</code> with <code>aria-label</code> need to be added into
		the header as shown below. <code>aria-label</code> translated description of the close action.
		It can be more descriptive like <em>Close login</em>, etc. depending on the modal window usage.
	</p>
</section>

<article>
	<section>
		<h2>Modal</h2>
		<p>
			Dialog is a version of popup window which <strong>does</strong> disable interaction with rest of
			the page.
		</p>
		<p>
			To open modal <strong>do not use</strong> <code>open</code> attribute. Instead open it by
			javascript via <code>dialogElement.showModal()</code> function. This way, the

			<kbd>esc</kbd> functionality is enabled by default (no JS needed).
		</p>
		<p>
			In example below you can see <code>form</code> as wrapper of the article. This way the modal
			will be auto-closed by a submit buttons. If you want to close a modal without submitting the
			form, you need to add <code>formmethod="dialog"</code> to the submit button as shown below.
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
			Dialog is a version of popup window which <strong>does not</strong> disable interaction with rest
			of the page.
		</p>
		<p>
			To open dialog either use <code>dialogElement.show()</code> or add <code>open</code> attribute
			to it. Opening and
			<kbd>esc</kbd> event need to be implemented by javascript. Closing can be handled by submit button
			as in the example above.
		</p>

		<button
			on:click={() => {
				$dialogOpenedStore = true;
			}}>Open Dialog example</button
		>
	</section>

	<CardCode code={dialogCode} examplePosition={''} showExample={false}></CardCode>
</article>
