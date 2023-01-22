const textColor = '#adb5bd'
const textColorHover = '#fcb32c'
const animationDuration = 1000 // ms
const feedbackText = 'Copied 🎉'

export const showCopyFeedbackAnimation = (copyButton: HTMLButtonElement) => {
	// store code language
	const codeLanguage = copyButton.innerText
	// disable copy button while feedback animation is running
	copyButton.disabled = true
	// Provide visual feedback to user that text has been copied
	copyButton.textContent = feedbackText
	copyButton.style.color = textColorHover

	setTimeout(() => {
		copyButton.textContent = codeLanguage
		copyButton.style.color = textColor
		copyButton.disabled = false

		copyButton.onmouseover = () => {
			copyButton.style.color = textColorHover
		}
		copyButton.onmouseleave = () => {
			copyButton.style.color = textColor
		}
	}, animationDuration)
}
