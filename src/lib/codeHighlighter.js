/* eslint-disable */
// @ts-nocheck
import { getHighlighter, renderToHtml } from 'shiki'
import { readFile } from 'fs/promises'

const synthWave84Theme = JSON.parse(await readFile(new URL('./synthWave84.json', import.meta.url)))

const htmlEscapes = {
	'{': '&lbrace;',
	'}': '&rbrace;',
	'`': '&grave;',
}

const langToLabel = {
	js: 'JavaScript',
	ts: 'TypeScript',
	svelte: 'Svelte',
	css: 'CSS',
	html: 'HTML',
	jsx: 'JSX',
	tsx: 'TSX',
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
 * @param {string} rangeString range string to be parsed (e.g. '1,3-5,8')
 * @returns {number[]} array of line numbers to be highlighted
 */
function rangeParser(rangeString) {
	// Empty rangeString return empty array
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

	const codeToolbarHtml = `
	<div class="flex items-center justify-between p-4">
		<div style="color: rgb(249 115 22);">${langToLabel[lang]}</div>
		<div class="flex gap-4">
			<button class="hidden btn btn-sm variant-filled-primary code-wrap-btn" type="button">Wrap</button>
			<button class="btn btn-sm variant-filled-primary code-copy-btn" type="button">Copy</button>
		</div>
	</div>
	`

	// ref: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/scrollbar_role
	const html = renderToHtml(tokens, {
		fg: getForegroundColor(synthWave84Theme),
		bg: getBackgroundColor(synthWave84Theme),
		elements: {
			pre({ className, style, children }) {
				return `<pre class="${className}" style="${style}" data-code-label="${langToLabel[lang]}">${codeToolbarHtml}<div class="overflow-x-auto code-wrapper" tabindex="0" role="scrollbar" aria-controls="code-block" aria-valuenow="0">${children}</div></pre>`
			},
			code({ children }) {
				return `<code id="code-block">${children}</code>`
			},
		},
		lineOptions: isFocus
			? highlightLinesFocus.map((element) => ({ line: element, classes: ['highlight-line-focus'] }))
			: [
					...highlightLinesAdd.map((element) => ({
						line: element,
						classes: ['highlight-line-add'],
					})),
					...highlightLinesRemove.map((element) => ({
						line: element,
						classes: ['highlight-line-remove'],
					})),
					...highlightLinesNormal.map((element) => ({
						line: element,
						classes: ['highlight-line-normal'],
					})),
			  ],
	})

	return escapeHtml(html)
}

export default highlighter
