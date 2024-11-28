// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface logoWhite {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	logoWhite: logoWhite
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Skalena US',
		text: 'Skalena Inc.'
	},
	logoWhite: {
		src: '/logo-white.svg',
		alt: 'Skalena US',
		text: 'Skalena Inc.'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Pricing', link: '/pricing' },
		{ name: 'Features', link: '/features' },
		{
			name: 'Resources',
			link: '#',
			submenu: [
				{ name: 'Blog', link: '/blog' },
				{ name: 'Changelog', link: '/changelog' },
				{ name: 'FAQ', link: '/faq' },
				{ name: 'Terms', link: '/terms' }
			]
		},

	],
	navActions: [{ name: 'Contact', link: '/contact', style: 'primary', size: 'lg' }]
}
