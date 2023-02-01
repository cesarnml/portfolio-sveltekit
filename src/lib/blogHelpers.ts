import { wordsPerMinute as wpm } from './config'

/**
 * Hack to programmatically adjusted remark-reading-time output by custom wordsPerMinute
 * @param time in milliseconds
 * @param wordsPerMinute blog reading speed
 */
function adjustReadingTimeText(time: number, wordsPerMinute = wpm) {
	const defaultWordsPerMinute = 200
	const sec2ms = 1000
	const min2sec = 60
	const conversionFactor = defaultWordsPerMinute / wordsPerMinute
	const newMinutes = Math.ceil((time * conversionFactor) / sec2ms / min2sec)
	const isSingular = newMinutes === 1
	return isSingular ? `${newMinutes} minute` : `${newMinutes} minutes`
}

/**
 * Adjust a blog post's readingTime.text by custom wordsPerMinute
 */
export function adjustPostReadingTimeText(post: App.BlogPost) {
	const adjustedReadingTimeText = adjustReadingTimeText(post.readingTime.time)
	post.readingTime.text = adjustedReadingTimeText
	return post
}
