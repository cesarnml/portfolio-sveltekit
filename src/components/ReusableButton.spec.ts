// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/svelte'
import ReusableButton from './ReusableButton.svelte'

test('shows proper heading when rendered', () => {
	render(ReusableButton)
	const button = screen.getByText('Hello world!')
	expect(button).toBeInTheDocument()
})

test('changes button text on click', async () => {
	render(ReusableButton)
	const button = screen.getByRole('button')

	// Using await when firing events is unique to the svelte testing library because
	// we have to wait for the next `tick` so that Svelte flushes all pending state changes.
	await fireEvent.click(button)

	const alert = screen.getByText('we did it.')
	expect(alert).toBeInTheDocument()
})
