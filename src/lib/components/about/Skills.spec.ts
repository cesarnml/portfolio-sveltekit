import { render, screen, within } from '@testing-library/svelte'
import Skills from './Skills.svelte'

it('renders an svg element', async () => {
	const skills = ['Cooking', 'SvelteKit']

	render(Skills, { props: { skills } })

	// It displays a heading
	expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument()
	screen.getAllByRole('listitem').forEach((ele, idx) => {
		// eslint-disable-next-line @typescript-eslint/unbound-method
		const { getByText } = within(ele)
		expect(getByText(skills[idx])).toBeInTheDocument()
	})
})
