<script lang="ts">
	import Picture from '@components/Picture.svelte'
</script>

<svelte:head>
	<title>Resume</title>
</svelte:head>

<form method="get" action="/pdfs/Resume-CesarMejia.pdf" class="flex justify-center mb-8">
	<button class="hover:bg-blue-600 px-4 py-2 font-bold text-white bg-blue-700 border border-blue-400 rounded">
		Download PDF
	</button>
</form>
<div>
	<Picture src="/src/lib/assets/picture/Resume-CesarMejia.png" alt="resume" loading="eager" decoding="sync" />
</div>
