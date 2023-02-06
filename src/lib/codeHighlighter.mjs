import { parse } from 'node-html-parser'
import { getHighlighter } from 'shiki'
import { readFile } from 'fs/promises'
const synthwaveJson = JSON.parse(await readFile(new URL('./synthwave.json', import.meta.url)))

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(code) {
	return code.replace(/[{}`]/g, (character) => ({ '{': '&lbrace;', '}': '&rbrace;', '`': '&grave;' }[character]))
}

/**
 * Returns array of line numbers to be highlighted
 * @param {string} rangeString range string to be parsed (e.g. {1,3-5,8})
 * @returns {number[]} array of line numbers to be highlighted
 */
function rangeParser(rangeString) {
	const result = []
	const ranges = rangeString.split(',')
	ranges.forEach((element) => {
		if (element.indexOf('-') === -1) {
			result.push(parseInt(element, 10))
		} else {
			const limits = element.split('-')
			const start = parseInt(limits[0], 10)
			const end = parseInt(limits[1], 10)
			for (let i = start; i <= end; i += 1) {
				result.push(i)
			}
		}
	})
	return result
}

/**
 * @param html {string} - code to highlight
 * @returns {string} - highlighted html
 */
function makeFocusable(html) {
	const root = parse(html)
	root.querySelector('pre').setAttribute('tabIndex', '0')
	return root.toString()
}

/**
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {string} - highlighted html
 */
async function highlighter(code, lang, meta) {
	const shikiHighlighter = await getHighlighter({
		theme: synthwaveJson,
	})

	let html
	if (!meta) {
		html = shikiHighlighter.codeToHtml(code, {
			lang,
		})
	} else {
		// const highlightMeta = /{([\d,-]+)}/.exec(meta)[1]
		const highlightMetaAdd = (meta.match(/[\d-]+a/g) ?? []).join(',').replaceAll('a', '')
		const highlightMetaRemove = (meta.match(/[\d-]+r/g) ?? []).join(',').replaceAll('r', '')
		const highlightMetaNormal = (meta.match(/[\d-]+n/g) ?? []).join(',').replaceAll('n', '')
		const highlightMetaFocus = (meta.match(/[\d-]+f/g) ?? []).join(',').replaceAll('f', '')

		const highlightLinesAdd = rangeParser(highlightMetaAdd)
		const highlightLinesRemove = rangeParser(highlightMetaRemove)
		const highlightLinesNormal = rangeParser(highlightMetaNormal)
		const highlightLinesFocus = rangeParser(highlightMetaFocus)

		const isFocus = !!highlightLinesFocus.length

		html = shikiHighlighter.codeToHtml(code, {
			lang,
			lineOptions: isFocus
				? highlightLinesFocus.map((element) => ({ line: element, classes: ['highlight-line-focus'] }))
				: [
						...highlightLinesAdd.map((element) => {
							return {
								line: element,
								classes: ['highlight-line-add'],
							}
						}),
						...highlightLinesRemove.map((element) => {
							return {
								line: element,
								classes: ['highlight-line-remove'],
							}
						}),
						...highlightLinesNormal.map((element) => {
							return {
								line: element,
								classes: ['highlight-line-normal'],
							}
						}),
				  ],
		})
	}
	html = makeFocusable(html)
	return escapeHtml(html)
}

export default highlighter
