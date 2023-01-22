import { render, screen } from '@testing-library/svelte'
import ReusableImage from './ReusableImage.svelte'

describe('ReusableImage', () => {
	const src = 'test-image.png'
	const alt = 'happy test dog'

	beforeEach(() => {
		render(ReusableImage, { src, alt })
	})

	test('shows proper heading when rendered', () => {
		const img = screen.getByRole('img', { name: alt })
		expect(img).toHaveAttribute('src', src)
	})
})
