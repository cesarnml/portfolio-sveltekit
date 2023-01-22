export const Url = {
	Home: '/',
	About: '/about',
	Blog: '/blog',
	BlogDetail: (slug: string) => `${Url.Blog}/${slug}`,
	Contact: '/contact'
} as const

export type UrlType = (typeof Url)[keyof typeof Url]
