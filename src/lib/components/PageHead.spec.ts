import { render, waitFor } from '@testing-library/svelte'
import PageHead from './PageHead.svelte'

function getMetaByName(metaName: string) {
	const metas = document.getElementsByTagName('meta')
	for (let i = 0; i < metas.length; i += 1) {
		if (metas[i].getAttribute('name') === metaName) {
			return metas[i].getAttribute('content')
		}
	}
	return ''
}

function getMetaProperty(metaName: string) {
	const metas = document.getElementsByTagName('meta')
	for (let i = 0; i < metas.length; i += 1) {
		if (metas[i].getAttribute('property') === metaName) {
			return metas[i].getAttribute('content')
		}
	}
	return ''
}

it('renders a PageHead with `title` prop', async () => {
	const siteTitle = "Cesar Mejia's Web Portfolio"

	const props = {
		title: 'Test Title',
		description: 'test description',
		image: '/src/lib/assets/picture/avatar.png',
	}
	render(PageHead, { props })

	// Expect correct title
	await waitFor(() => expect(document.title).toEqual(props.title))
	// TODO: Improve test to not rely on hardcoded value
	// Expect correct canonical link
	await waitFor(() =>
		expect(document.querySelector("[rel='canonical']")).toHaveAttribute(
			'href',
			'http://localhost/test',
		),
	)
	// Expect correct meta tags
	await waitFor(() => expect(getMetaByName('description')).toEqual(props.description))
	await waitFor(() => expect(getMetaProperty('og:site_name')).toEqual(siteTitle))
	await waitFor(() => expect(getMetaProperty('og:title')).toEqual(props.title))
	await waitFor(() => expect(getMetaProperty('og:description')).toEqual(props.description))
	await waitFor(() => expect(getMetaProperty('og:image')).toEqual(props.image))
})

it('renders a PageHead without `title` prop', async () => {
	const siteTitle = "Cesar Mejia's Web Portfolio"

	const props = {
		description: 'test description',
		image: '/src/lib/assets/picture/avatar.png',
	}
	render(PageHead, { props })

	// Expect correct title
	await waitFor(() => expect(document.title).toEqual(siteTitle))
	// TODO: Improve test to not rely on hardcoded value
	// Expect correct canonical link
	await waitFor(() =>
		expect(document.querySelector("[rel='canonical']")).toHaveAttribute(
			'href',
			'http://localhost/test',
		),
	)
	// Expect correct meta tags
	await waitFor(() => expect(getMetaByName('description')).toEqual(props.description))
	await waitFor(() => expect(getMetaProperty('og:site_name')).toEqual(siteTitle))
	await waitFor(() => expect(getMetaProperty('og:title')).toEqual(siteTitle))
	await waitFor(() => expect(getMetaProperty('og:description')).toEqual(props.description))
	await waitFor(() => expect(getMetaProperty('og:image')).toEqual(props.image))
})