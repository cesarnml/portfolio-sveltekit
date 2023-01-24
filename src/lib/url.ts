export const Url = {
	Home: '/',
	About: '/about',
	Projects: '/projects',
	Contact: '/contact',
	Blog: '/blog',
	BlogDetail: (slug: string) => `${Url.Blog}/${slug}`,
	Resume: '/resume'
} as const

export type UrlType = (typeof Url)[keyof typeof Url]
