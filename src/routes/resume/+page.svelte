<script lang="ts">
	import resumeSrc from '@assets/images/Resume-CesarMejia.png'
	import Img from '@zerodevx/svelte-img'
</script>

<div>
	<form method="get" action="/pdfs/Resume-CesarMejia.pdf">
		<button class="px-4 py-2 font-bold text-white bg-blue-700 border border-blue-400 rounded hover:bg-blue-600">
			Download PDF
		</button>
	</form>
	<div>
		<Img src={resumeSrc} alt="resume" />
	</div>
</div>
