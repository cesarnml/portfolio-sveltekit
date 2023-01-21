// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/svelte'
import ReusableButton from './ReusableButton.svelte'

test('shows proper heading when rendered', () => {
	render(ReusableButton)
	const button = screen.getByRole('button')
	expect(button).toHaveTextContent('Hello world!')
})

test('changes button text on click', async () => {
	render(ReusableButton)
	const button = screen.getByRole('button')
	await fireEvent.click(button)

	expect(button).toBeInTheDocument()
})
