// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Skalena - Technology and Business Together',
	siteDescription:
		'Skalena - A hightech consulting firm, specialized in APIs, Integrations and DevOps.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Skalena'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
