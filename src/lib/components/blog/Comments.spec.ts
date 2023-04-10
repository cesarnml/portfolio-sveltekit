import { render, screen } from '@testing-library/svelte'
import Comments from './Comments.svelte'

it('renders a Comments component', async () => {
	render(Comments)

	expect(screen.getByTestId('giscus')).toBeInTheDocument()
})
