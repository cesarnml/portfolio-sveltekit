import { retrieveTextToCopy } from './retrieveTextToCopy'
import { copyToClipboard } from './copyToClipboard'
import { showCopyFeedbackAnimation } from './showCopyFeedbackAnimation'

export const handleCopyClick = (evt: MouseEvent | TouchEvent) => {
	const textToCopy = retrieveTextToCopy(evt)
	copyToClipboard(textToCopy)
	showCopyFeedbackAnimation(evt.target as HTMLButtonElement)
}
