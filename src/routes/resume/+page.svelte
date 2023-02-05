<script lang="ts">
	import Picture from '@components/Picture.svelte'
</script>

<div>
	<form method="get" action="/pdfs/Resume-CesarMejia.pdf">
		<button class="px-4 py-2 font-bold text-white bg-blue-700 border border-blue-400 rounded hover:bg-blue-600">
			Download PDF
		</button>
	</form>
	<div>
		<Picture src="/src/lib/assets/picture/Resume-CesarMejia.png" alt="resume" />
	</div>
</div>
