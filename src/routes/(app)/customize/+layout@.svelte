<script lang="ts">
	import Downloader from '$lib/components/Downloader.svelte';
	import EncoderDecoder from '$lib/components/EncoderDecoder.svelte';

	import CustomControls from '$lib/components/CustomControls.svelte';

	import { customizationLoadedStore } from '$lib/stores';
	import { onDestroy } from 'svelte';

	let accordions: { [key: string]: boolean } = {
		download: false,
		import: false
	};

	onDestroy(() => {
		$customizationLoadedStore = false;
	});
</script>

<main aria-labelledby="customization-title">
	<h1 id="customization-title">Customization</h1>
	<div class="s-grid" style="--gap: 2rem; --span:5;">
		<div
			class="loader"
			aria-busy={$customizationLoadedStore ? 'false' : 'true'}
			style={$customizationLoadedStore ? 'display:none' : ''}
		></div>
		<div style={!$customizationLoadedStore ? 'display:none' : ''}>
			<div>
				<article>
					<details bind:open={accordions.download}>
						<summary role="button">Download CSS (customized)</summary>
						<div inert={!accordions.download}>
							<Downloader></Downloader>
						</div>
					</details>
				</article>
				<article>
					<details bind:open={accordions.import}>
						<summary role="button">Import / Export</summary>
						<div inert={!accordions.import}>
							<EncoderDecoder></EncoderDecoder>
						</div>
					</details>
				</article>

				<CustomControls></CustomControls>
			</div>
			<div><slot /></div>
		</div>
	</div>
</main>

<style lang="scss">
	.loader {
		flex-grow: 1;
		width: 100%;
		min-height: 80vh;
	}
	aside {
		position: relative;
	}
</style>
