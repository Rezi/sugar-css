<script>
	export let withName = false;
</script>

<div class="logo-wrap">
	<div class="logo logo-square">
		<div class="top logo-square">
			<slot name="top" />
		</div>
		<div class="middle"><slot name="middle" /></div>

		<div class="bottom logo-square"></div>
	</div>
	{#if withName}
		Sugar.css
	{/if}
</div>

<style lang="scss">
	.logo:has(.middle:empty):has(.top:empty) .top {
		width: 100%;
		height: 100%;
		position: relative;

		&:before,
		&:after {
			position: absolute;
			content: '';
			display: block;
			width: 0%;
			height: calc(var(--size) * 0.2);
			border-radius: calc(var(--size) * 0.1);
			transition: all var(--transition-time);
			background-color: var(--s-color-bg);
		}

		&:before {
			right: -80%;
			top: 20%;
		}
		&:after {
			left: -80%;
			bottom: 20%;
		}
	}

	.logo-wrap:has(.middle:empty):has(.top:empty) {
		&:hover {
			.logo {
				box-shadow: none;
			}

			.top {
				border: 0;

				&:before,
				&:after {
					width: 72%;
				}
			}

			.bottom {
				box-shadow: none;
			}
		}
	}

	.logo-wrap {
		display: flex;
		align-items: center;
		gap: var(--sugar-nav-gap);

		&:hover {
			.logo {
				transform: scale(1);
			}

			.top {
				transform: translateZ(0);
			}

			.bottom {
				transform: translateZ(-1px);
			}

			.top:before {
				right: calc(-1 * var(--size) * 0.1) !important;
			}
			.top:after {
				left: calc(-1 * var(--size) * 0.1) !important;
			}
		}
	}

	.logo-square {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: visible;
		transition: transform var(--transition-time) ease;
	}

	.logo {
		--transition-time: 0.5s;
		--border-width: calc(var(--size) / 20);
		--layer-space: calc(var(--size) / 3);
		--box-shadow: calc(var(--size) / 12) calc(var(--size) / 12) calc(var(--size) / 6)
			var(--s-color-shadow);

		max-width: var(--size);
		width: 100vw;
		aspect-ratio: 1 / 1;

		transform: scale(0.75) rotateY(-30deg) rotateX(45deg) translateZ(calc(var(--size) / 3));
		transform-origin: 50% 100%;
		transform-style: preserve-3d;
		box-shadow: var(--box-shadow);
		background: var(--s-color-primary);
		transition: all var(--transition-time);

		.top,
		.bottom {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.top {
			transform: translateZ(var(--layer-space));
			border: var(--border-width) solid var(--s-color-primary-80-fg);
			background-color: color-mix(in srgb, var(--s-color-primary) 20%, transparent);
		}

		.bottom {
			transform: translateZ(calc(-1 * var(--layer-space)));
			background: var(--s-color-primary-80-fg);
			box-shadow: var(--box-shadow);
			transition: all var(--transition-time);
		}
	}
</style>
