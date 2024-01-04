export type SocialLink = {
	platform: string
	href: string
	me?: string
	text: string
	icon: string
	footerOnly?: boolean
}

export type SiteInfo = {
	name: string
	title: string
	description: string
	image: {
		src: string
		alt: string
	}
	socialLinks: SocialLink[]
}

const siteInfo: SiteInfo = {
	name: "Astro",
	title: "Build the web you want",
	description:
		"Astro builds fast content sites, powerful web applications, dynamic server APIs, and everything in-between.",
	image: {
		src: "/og/social.jpg",
		alt: "Build the web you want",
	},
	socialLinks: [
		{
			platform: "github",
			href: "https://github.com/withastro/astro",
			me: "https://github.com/withastro/",
			text: "Go to Astro's GitHub repo",
			icon: "social/github",
		},
		{
			platform: "twitter",
			href: "https://twitter.com/astrodotbuild",
			me: "https://twitter.com/astrodotbuild",
			text: "Follow Astro on Twitter",
			icon: "social/twitter",
		},
	],
}

export default siteInfo
