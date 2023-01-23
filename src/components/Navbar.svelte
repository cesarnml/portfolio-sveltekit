<script lang="ts">
	import { Url } from '@lib/url'
</script>

<nav class="navbar bg-base-100">
	<div class="navbar-start">
		<a class="btn btn-ghost normal-case text-xl" href="#logo">daisyUI</a>
	</div>
	<div class="navbar-center lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li><a href={Url.Home}>Home</a></li>
			<li><a href={Url.About}>About</a></li>
			<li><a href={Url.Blog}>Blog</a></li>
			<li><a href={Url.Contact}>Contact</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn" href="#bang">Get started</a>
	</div>
</nav>
