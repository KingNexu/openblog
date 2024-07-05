interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'JSS', // Site author
	title: 'JSS Blog', // Site title.
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	lang: 'de-DE',
	ogLocale: 'de_DE',
	shareMessage: 'Post teilen', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
