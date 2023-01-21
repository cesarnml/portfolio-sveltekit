<script lang="ts">
	import type { PageData } from './$types'
	import Prism from 'prismjs'
	import '@lib/prism/plugins/line-numbers'
	import PageHead from '@components/PageHead.svelte'
	import ArticleTitle from '@components/ArticleTitle.svelte'
	import ArticleMeta from '@components/ArticleMeta.svelte'
	// import * as readingTime from 'reading-time'

	export let data: PageData
	console.log('frontmatter:', data.frontmatter)
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />
<div>{data.frontmatter.readingTime}</div>
<div class="line-numbers">
	{@html data.html}
</div>
