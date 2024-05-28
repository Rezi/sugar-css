<script lang="ts">
	import { dialogOpenedStore, modalOpenedStore } from '$lib/stores';
	import '$lib/scss/index.scss';

	import Logo from '$lib/components/Logo.svelte';

	let dialogEl: HTMLDialogElement;
	let modalEl: HTMLDialogElement;

	function closeDialog() {
		$dialogOpenedStore = false;
		$modalOpenedStore = false;
	}

	$: {
		if (dialogEl && $dialogOpenedStore !== undefined) {
			$dialogOpenedStore ? dialogEl.show() : dialogEl.close();
			$dialogOpenedStore = undefined;
		}
	}

	$: {
		if (modalEl && $modalOpenedStore !== undefined) {
			$modalOpenedStore ? modalEl.showModal() : modalEl.close();
			$modalOpenedStore = undefined;
		}
	}
</script>

<header aria-label="Sticky header">
	<nav class="s-container" aria-label="Main navigation">
		<menu><li><a href="/"><Logo --size="2.2rem" withName={true}></Logo></a></li></menu>
		<menu
			><li><a href="/doc">Getting started</a></li>
			<li>
				<a href="https://github.com/Rezi/sugar-css" aria-label="Github repository">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="github-icon"
						><path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/></svg
					>
				</a>
			</li>
		</menu>
	</nav>
</header>
<div class="s-container"><slot /></div>
<footer aria-label="License footer">
	<div class="s-container">
		<a href="https://github.com/Rezi/sugar-css/blob/main/LICENSE.md">MIT License</a>
	</div>
</footer>

<dialog bind:this={modalEl}>
	<form>
		<article>
			<header>
				<h3>Modal title</h3>
				<button type="submit" formmethod="dialog" aria-label="Close"></button>
			</header>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum harum laborum quo vero veritatis
			eaque similique fuga quae, repudiandae, necessitatibus dolorem facere obcaecati beatae architecto
			expedita laboriosam cumque numquam inventore. Lorem ipsum dolor sit amet, consectetur adipisicing
			elit. Rerum harum laborum quo vero veritatis eaque similique fuga quae, repudiandae, necessitatibus
			dolorem facere obcaecati beatae architecto expedita laboriosam cumque numquam inventore.
			<footer>
				<div class="s-grid" style="--span:3;">
					<div>
						<div>
							<button formmethod="dialog" class="s-secondary" type="submit">Cancel</button>
						</div>
						<div><button type="submit">Submit</button></div>
					</div>
				</div>
			</footer>
		</article>
	</form>
</dialog>

<dialog bind:this={dialogEl}>
	<article>
		<header>
			<h3>Dialog title</h3>
			<button type="submit" aria-label="Close" on:click={closeDialog}></button>
		</header>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores vitae officia, voluptatem modi
		quos quisquam similique tenetur voluptatum, ratione suscipit numquam dolore aperiam molestiae impedit.
		Ut, maiores? Alias, quos facilis.
	</article>
</dialog>

<style lang="scss">
	:global(body) {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	.github-icon {
		height: 1.5rem;
	}

	header a {
		color: var(--s-color-text);
		display: flex;
	}
</style>
