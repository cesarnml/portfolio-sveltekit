import { render, screen } from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import { createServer } from '../../server'
import ContactForm from './ContactForm.svelte'

it('renders a contact form ', async () => {
	const contact = {
		name: 'Airbnb Recruiter',
		email: 'jake@airbnb.com',
		message: 'We want to hire you asap',
	}

	const serverConfig = [
		{
			path: 'https://smtpjs.com/v3/smtpjs.aspx',
			res: (req: any, res: any, ctx: any) => 'OK',
		},
	]

	render(ContactForm)

	const nameInput = screen.getByRole('textbox', { name: /your name/i })
	const emailInput = screen.getByRole('textbox', { name: /your email/i })
	const messageInput = screen.getByRole('textbox', { name: /what's on your mind/i })
	const button = screen.getByRole('button', { name: /send/i })

	createServer(serverConfig)

	await userEvent.type(nameInput, contact.name)
	await userEvent.type(emailInput, contact.email)
	await userEvent.type(messageInput, contact.message)

	await userEvent.click(button)
})
