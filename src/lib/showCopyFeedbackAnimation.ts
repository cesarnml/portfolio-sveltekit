const animationDuration = 1500 // ms
const feedbackText = 'Copied 🎉'
const attribute = 'data-copy-to-clipboard-animating'

export const showCopyFeedbackAnimation = (copyButton: HTMLButtonElement) => {
	if (copyButton.getAttribute(attribute) === 'true') return
	// store code language
	const codeLanguage = copyButton.innerText
	// disable copy button (via data attribute) while feedback animation is running
	copyButton.setAttribute(attribute, 'true')
	// Provide visual feedback to user that text has been copied
	copyButton.textContent = feedbackText

	setTimeout(() => {
		copyButton.setAttribute(attribute, 'false')
		copyButton.textContent = codeLanguage
	}, animationDuration)
}
