import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

/* https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables */
const VERCEL_PREVIEW_SITE =
	process.env.VERCEL_ENV !== "production" &&
	process.env.VERCEL_URL &&
	`https://${process.env.VERCEL_URL}`

// https://astro.build/config
export default defineConfig({
	site: VERCEL_PREVIEW_SITE || "https://astro.build",
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		solidJs(),
		mdx(),
		sitemap(),
	],
	markdown: {
		shikiConfig: {
			theme: "one-dark-pro",
		},
	},
	image: {
		domains: ["v1.screenshot.11ty.dev"],
	},
	vite: {
		ssr: {
			noExternal: ["smartypants"],
		},
	},
})
