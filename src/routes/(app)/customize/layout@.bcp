<script lang="ts">
	import CustomControls from '$lib/components/CustomControls.svelte';

	import { customizationLoadedStore } from '$lib/stores';
	import { display } from 'colorjs.io/fn';
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		$customizationLoadedStore = false;
	});
</script>

<div class="s-grid" style="--gap: 2rem; --span:6;">
	<div
		class="loader"
		aria-busy={$customizationLoadedStore ? 'false' : 'true'}
		style={$customizationLoadedStore ? 'display:none' : ''}
	></div>
	<div style={!$customizationLoadedStore ? 'display:none' : ''}>
		<aside style="--span-8:3;--span-10:3;">
			<CustomControls></CustomControls>
		</aside>
		<main style="--span-8:5;--span-10:7;"><slot /></main>
	</div>
</div>

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
