import { render, screen } from '@testing-library/svelte'
import WavesSvg from './WavesSvg.svelte'

it('it render an svg element', async () => {
	render(WavesSvg)

	expect(screen.getByRole('img', { name: /waves/i })).toBeInTheDocument()
})
