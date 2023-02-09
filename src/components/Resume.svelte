<script lang="ts">
	import Picture from '@components/Picture.svelte'
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<form method="get" action="/pdfs/Resume-CesarMejia.pdf" class="mb-8 flex justify-center">
	<button class="rounded border border-blue-400 bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-600">
		Download PDF
	</button>
</form>
<div>
	<Picture src="/src/lib/assets/picture/Resume-CesarMejia.png" alt="resume" loading="eager" decoding="sync" />
</div>
