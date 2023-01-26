<script lang="ts">
	export let src: string
	export let alt: string
</script>

<div class="w-12 h-12">
	<img class="object-contain w-full h-12" {src} {alt} />
</div>
