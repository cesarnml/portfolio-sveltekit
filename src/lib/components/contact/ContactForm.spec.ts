import { render, screen } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import ContactForm from './ContactForm.svelte'

it('renders a contact form ', async () => {
	const user = userEvent.setup()

	vi.mock('/src/lib/smtp.js', () => ({ Email: { send: async () => vi.fn() } }))
	vi.mock('party-js')

	const contact = {
		name: 'Airbnb Recruiter',
		email: 'jake@airbnb.com',
		message: 'We want to hire you asap',
	}

	render(ContactForm)

	const nameInput = screen.getByRole('textbox', { name: /your name/i })
	const emailInput = screen.getByRole('textbox', { name: /your email/i })
	const messageInput = screen.getByRole('textbox', { name: /what's on your mind/i })
	const button = screen.getByRole('button', { name: /send/i })

	await user.type(nameInput, contact.name)
	await user.type(emailInput, contact.email)
	await user.type(messageInput, contact.message)

	expect(nameInput).toHaveDisplayValue(contact.name)
	expect(emailInput).toHaveDisplayValue(contact.email)
	expect(messageInput).toHaveDisplayValue(contact.message)

	await user.click(button)

	expect(nameInput).toHaveDisplayValue('')
	expect(emailInput).toHaveDisplayValue('')
	expect(messageInput).toHaveDisplayValue('')
})

it('renders a contact form ', async () => {
	const user = userEvent.setup()

	vi.mock('/src/lib/smtp.js', () => ({ Email: { send: async () => vi.fn() } }))
	vi.mock('party-js')

	const contact = {
		name: 'Airbnb Recruiter',
		email: 'jake@airbnb.com',
		message: 'We want to hire you asap',
	}

	render(ContactForm)

	const nameInput = screen.getByRole('textbox', { name: /your name/i })
	const emailInput = screen.getByRole('textbox', { name: /your email/i })
	const messageInput = screen.getByRole('textbox', { name: /what's on your mind/i })
	const button = screen.getByRole('button', { name: /send/i })

	await user.type(nameInput, contact.name)
	await user.type(emailInput, contact.email)
	await user.type(messageInput, contact.message)

	// User can use all inputs
	expect(nameInput).toHaveDisplayValue(contact.name)
	expect(emailInput).toHaveDisplayValue(contact.email)
	expect(messageInput).toHaveDisplayValue(contact.message)

	await user.click(button)

	// Form clears after submission
	expect(nameInput).toHaveDisplayValue('')
	expect(emailInput).toHaveDisplayValue('')
	expect(messageInput).toHaveDisplayValue('')
})
