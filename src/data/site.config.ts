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
	description: 'Interesting Blog about my travels and stay in the USA.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
