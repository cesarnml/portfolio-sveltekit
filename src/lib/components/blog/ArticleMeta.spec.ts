import { render, screen } from '@testing-library/svelte'
import ArticleMeta from './ArticleMeta.svelte'

it('renders article meta data and cover image', async () => {
	// FIXME: Brittle transformation of props
	const formatDate = (date: string) => new Date(date).toDateString().split(' ').slice(1).join(' ')

	const articleWithImage = {
		author: 'Cesar Mejia',
		date: '2023-01-17',
		readingTime: '2 mins',
		wordCount: 90,
		image: '/src/lib/assets/picture/hero.jpg',
		viewCount: 2,
	}

	render(ArticleMeta, { props: articleWithImage })

	// It has an avatar image
	expect(screen.getByRole('img', { name: /avatar/i })).toBeInTheDocument()

	// It displays article author's name
	expect(screen.getByText(articleWithImage.author)).toBeInTheDocument()

	// It displays article date
	expect(screen.getByText(formatDate(articleWithImage.date))).toBeInTheDocument()

	// It displays article reading time
	expect(screen.getByText(articleWithImage.readingTime)).toBeInTheDocument()

	// It displays article word count (plural)
	expect(screen.getByText(RegExp(`${articleWithImage.wordCount} words`, 'i'))).toBeInTheDocument()

	// It displays article view count (plural)
	expect(screen.getByText(RegExp(`${articleWithImage.viewCount} views`, 'i'))).toBeInTheDocument()

	// It displays article cover image when `image` prop passed
	expect(screen.getByRole('img', { name: /article hero/i })).toBeInTheDocument()
})

it("doesn't display cover image when `image` prop omitted", async () => {
	const articleWithoutImage = {
		author: 'Cesar Mejia',
		date: '2023-01-17',
		readingTime: '2 mins',
		wordCount: 1,
		viewCount: 1,
	}

	render(ArticleMeta, { props: articleWithoutImage })

	// It does NOT display article cover image when `image` prop omitted
	expect(screen.queryByRole('img', { name: /article hero/i })).not.toBeInTheDocument()

	// It displays article word count (singular)
	expect(screen.getByText(`${articleWithoutImage.wordCount} word`)).toBeInTheDocument()

	// It displays article view count (singular)
	expect(screen.getByText(`${articleWithoutImage.viewCount} view`)).toBeInTheDocument()
})
