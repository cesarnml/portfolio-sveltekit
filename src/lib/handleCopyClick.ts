import { showCopyFeedbackAnimation } from './showCopyFeedbackAnimation'

export const handleCopyClick = (evt: MouseEvent | TouchEvent) => {
	showCopyFeedbackAnimation(evt.target as HTMLButtonElement)
}
