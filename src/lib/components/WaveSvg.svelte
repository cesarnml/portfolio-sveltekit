<script lang="ts">
	import '$lib/styles/waves.css'
</script>

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
