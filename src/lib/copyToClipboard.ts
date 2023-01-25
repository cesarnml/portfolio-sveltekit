/**
 * Programmatically copies `text` to user clipboard and
 * restores any previously user selected text on the page
 */
export const copyToClipboard = async (text: string) => {
	// Take steps to preserve user existing selection - if any
	// ref. https://developer.mozilla.org/en-US/docs/Web/API/Selection/
	const selection = document.getSelection()
	const rangeCount = selection?.rangeCount ?? 0

	const selectedRanges: Range[] = []

	if (selection && rangeCount > 0) {
		for (let i = 0; i < rangeCount; i++) {
			selectedRanges.push(selection.getRangeAt(i))
		}
	}

	// ref. https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
	await navigator.clipboard.writeText(text)

	// Restore previous user selections
	if (selection && rangeCount) {
		selection.removeAllRanges()
		for (let i = 0; i < rangeCount; i++) {
			selection.addRange(selectedRanges[i])
		}
	}
}
