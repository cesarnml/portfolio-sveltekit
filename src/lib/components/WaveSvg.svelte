<!-- ref: https://www.cssscript.com/animated-waves-svg/  -->
<div class="waves-container absolute w-full pt-40">
	<svg
		class="waves h-12 w-full md:h-[15vh]"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="0 24 150 28"
		preserveAspectRatio="none"
		shape-rendering="auto"
	>
		<defs>
			<path
				id="gentle-wave"
				d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
			/>
		</defs>
		<g class="parallax">
			<use xlink:href="#gentle-wave" x="48" y="0" />
			<use xlink:href="#gentle-wave" x="48" y="3" />
			<use xlink:href="#gentle-wave" x="48" y="5" />
			<use xlink:href="#gentle-wave" x="48" y="7" />
		</g>
	</svg>
</div>

<style>
	.parallax > use {
		animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
	}
	.parallax > use:nth-child(1) {
		fill: rgb(var(--color-primary-500) / 0.7);
		animation-delay: -2s;
		animation-duration: 7s;
	}
	.parallax > use:nth-child(2) {
		fill: rgb(var(--color-primary-500) / 0.5);
		animation-delay: -3s;
		animation-duration: 10s;
	}
	.parallax > use:nth-child(3) {
		fill: rgb(var(--color-primary-500) / 0.3);
		animation-delay: -4s;
		animation-duration: 13s;
	}
	.parallax > use:nth-child(4) {
		fill: rgb(var(--color-primary-500));
		animation-delay: -5s;
		animation-duration: 20s;
	}

	@keyframes move-forever {
		0% {
			transform: translate3d(-90px, 0, 0);
		}
		100% {
			transform: translate3d(85px, 0, 0);
		}
	}
</style>
