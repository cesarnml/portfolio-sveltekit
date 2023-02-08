import { parse } from 'node-html-parser'
import { getHighlighter, renderToHtml } from 'shiki'
import { readFile } from 'fs/promises'
const synthWave84Theme = JSON.parse(await readFile(new URL('./synthWave84.json', import.meta.url)))

const htmlEscapes = {
	'{': '&lbrace;',
	'}': '&rbrace;',
	'`': '&grave;',
}

/**
 * Returns code with curly braces and backticks replaced by HTML entity equivalents
 * @param {string} html - highlighted HTML
 * @returns {string} - escaped HTML
 */
function escapeHtml(code) {
	return code.replace(/[{}`]/g, (chr) => htmlEscapes[chr])
}

/**
 * Returns array of line numbers to be highlighted
 * @param {string} rangeString range string to be parsed (e.g. {1,3-5,8})
 * @returns {number[]} array of line numbers to be highlighted
 */
function rangeParser(rangeString) {
	if (rangeString === '') return []
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
 * @param code {string} - code to highlight
 * @param lang {string} - code language
 * @param meta {string} - code meta
 * @returns {string} - highlighted html
 */
async function highlighter(code, lang, meta) {
	const { codeToThemedTokens, getForegroundColor, getBackgroundColor } = await getHighlighter({
		theme: synthWave84Theme,
	})

	const tokens = codeToThemedTokens(code, lang)

	const metaAdd = (meta?.match(/[\d-]+a/g) ?? []).join(',').replaceAll('a', '')
	const metaRemove = (meta?.match(/[\d-]+r/g) ?? []).join(',').replaceAll('r', '')
	const metaNormal = (meta?.match(/[\d-]+n/g) ?? []).join(',').replaceAll('n', '')
	const metaFocus = (meta?.match(/[\d-]+f/g) ?? []).join(',').replaceAll('f', '')

	const highlightLinesAdd = rangeParser(metaAdd)
	const highlightLinesRemove = rangeParser(metaRemove)
	const highlightLinesNormal = rangeParser(metaNormal)
	const highlightLinesFocus = rangeParser(metaFocus)

	const isFocus = !!highlightLinesFocus.length

	const html = renderToHtml(tokens, {
		fg: getForegroundColor(synthWave84Theme),
		bg: getBackgroundColor(synthWave84Theme),
		elements: {
			pre({ className, style, children }) {
				return `<pre tabindex="0" class="${className}" style="${style}">${children}</pre>`
			},
		},
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

	return escapeHtml(html)
}

export default highlighter
