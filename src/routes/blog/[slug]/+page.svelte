<script lang="ts">
	import type { PageServerData } from './$types'
	import PageHead from '@components/PageHead.svelte'
	import ArticleTitle from '@components/ArticleTitle.svelte'
	import ArticleMeta from '@components/ArticleMeta.svelte'
	export let data: PageServerData
</script>

<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />
<div>{data.frontmatter.readingTime}</div>
<div data-testid="raw-html-wrapper">
	{@html data.html}
</div>
