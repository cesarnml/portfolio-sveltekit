<script lang="ts">
	import { Url } from '@lib/url'
</script>

<nav
	class="bg-slate-50/80 text-slate-800 backdrop-blur sticky top-0 z-50 flex items-center justify-between h-16 px-4 font-medium"
>
	<a href={Url.Home} class="hover:no-underline hover:text-fuchsia-800 flex items-center justify-center">
		<div class="w-12 h-12 mr-4 rounded-full">
			<img src="/avatar.png" class="object-contain w-full h-12" alt="avatar" />
		</div>
		<div>Cesar Mejia&nbsp;&nbsp;|&nbsp;&nbsp;Web Dev</div>
	</a>
	<ul class="flex items-center gap-8 list-none">
		<li><a href={Url.Home} class="hover:no-underline hover:text-fuchsia-800">Home</a></li>
		<li><a href={Url.About} class="hover:no-underline hover:text-fuchsia-800">About</a></li>
		<li><a href={Url.Projects} class="hover:no-underline hover:text-fuchsia-800">Projects</a></li>
		<li><a href={Url.Contact} class="hover:no-underline hover:text-fuchsia-800">Contact</a></li>
		<li><a href={Url.Blog} class="hover:no-underline hover:text-fuchsia-800">Blog</a></li>
		<li><a href={Url.Resume} class="hover:no-underline hover:text-fuchsia-800">Resume</a></li>
	</ul>
</nav>
