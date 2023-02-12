<script lang="ts">
	export let googleAnalyticsTrackingId: string
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsTrackingId}`}>
	</script>
	<script>
		window.dataLayer = window.dataLayer || []

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag('js', new Date())
		gtag('config', googleAnalyticsTrackingId)
	</script>
</svelte:head>
