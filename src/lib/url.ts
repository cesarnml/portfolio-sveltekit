export const Url = {
	Home: '/',
	Blog: '/blog',
	About: '/about',
	Contact: '/contact',
	BlogDetail: (slug: string) => `${Url.Blog}/${slug}`,
} as const

export type UrlType = (typeof Url)[keyof typeof Url]
