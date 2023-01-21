// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/svelte'
import ReusableButton from './ReusableButton.svelte'
it('describes the ReusableButton component', async () => {
	render(ReusableButton)
	const button = screen.getByRole('button')

	test('shows proper heading when rendered', async () => {
		expect(button).toHaveTextContent('Hello world!')
	})

	test('changes button text on click', async () => {
		await fireEvent.click(button)

		expect(button).toBeInTheDocument()
	})
})
