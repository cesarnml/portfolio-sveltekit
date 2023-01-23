<script lang="ts">
	import '../styles/app.css'
	import '@styles/shiki.css'
	import Navbar from '@components/Navbar.svelte'
</script>

<div class="dark:bg-slate-800 text-slate-300 ">
	<Navbar />
	<slot />
</div>
