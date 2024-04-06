import copyToClipboard from './copyToClipboard'
import retrieveTextToCopy from './retrieveTextToCopy'
import showCopyFeedbackAnimation from './showCopyFeedbackAnimation'

export default async function handleCopyClick(evt: MouseEvent | TouchEvent) {
	const textToCopy = retrieveTextToCopy(evt)
	await copyToClipboard(textToCopy)
	showCopyFeedbackAnimation(evt.target as HTMLButtonElement)
}
