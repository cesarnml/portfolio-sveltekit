/**
 * Assumes following DOM structure:
 *
 * <pre>
 * 		<div>
 *   		<div>...</div>
 * 	 		<div>
 *        <button>Wrap</button>
 *        <button>Copy</button>
 *      </div>
 *    </div>
 *   <code />
 * </pre>
 */

const codeElementTagName = 'code'

export const retrieveTextToCopy = (evt: MouseEvent | TouchEvent) => {
	const copyButton = evt.target as HTMLButtonElement
	const preElement = copyButton.parentElement?.parentElement?.parentElement as HTMLPreElement
	const codeElement = preElement.querySelector(codeElementTagName) as HTMLElement
	return codeElement.innerText // code text to be copied
}
