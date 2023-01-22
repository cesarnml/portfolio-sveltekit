<script lang="ts">
	import { Url } from '@lib/url'
	import '../styles/app.css'
	import '@styles/shiki.css'
</script>

<nav>
	<a href={Url.Home}>Home</a>
	<a href={Url.About}>About</a>
	<a href={Url.Blog}>Blog</a>
	<a href={Url.Contact}>Contact</a>
</nav>
<slot />
