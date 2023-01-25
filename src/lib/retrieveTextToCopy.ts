/**
 * Assumes following DOM structure:
 *
 * <pre>
 *   <code />
 *   <button /> // [event target]
 * </pre>
 */

const codeElementTagName = 'code'

export const retrieveTextToCopy = (evt: MouseEvent | TouchEvent) => {
	const copyButton = evt.target as HTMLButtonElement
	const preElement = copyButton.parentElement as HTMLPreElement
	const codeElement = preElement.querySelector(codeElementTagName) as HTMLElement
	return codeElement.innerText // code text to be copied
}
