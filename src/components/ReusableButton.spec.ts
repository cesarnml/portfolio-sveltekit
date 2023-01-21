// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/svelte'
import ReusableButton from './ReusableButton.svelte'

describe('ReusableButton', () => {
	const textBeforeClick = 'Hello world!'
	const textAfterClick = 'You changed me!'

	beforeEach(() => {
		render(ReusableButton)
	})

	test('shows proper heading when rendered', () => {
		const button = screen.getByRole('button')
		expect(button).toHaveTextContent(textBeforeClick)
	})

	test('changes button text on click', async () => {
		const button = screen.getByRole('button')

		await fireEvent.click(button)
		expect(button).toHaveTextContent(textAfterClick)
	})
})
