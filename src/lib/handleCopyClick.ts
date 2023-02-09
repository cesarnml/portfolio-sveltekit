import copyToClipboard from './copyToClipboard'
import retrieveTextToCopy from './retrieveTextToCopy'
import showCopyFeedbackAnimation from './showCopyFeedbackAnimation'

export default function handleCopyClick(evt: MouseEvent | TouchEvent) {
	const textToCopy = retrieveTextToCopy(evt)
	copyToClipboard(textToCopy)
	showCopyFeedbackAnimation(evt.target as HTMLButtonElement)
}
