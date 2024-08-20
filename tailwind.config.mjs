const { addIconSelectors, addDynamicIconSelectors } = require('@iconify/tailwind');
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'darkCyan': {
					50: "#E1F4FA",
					100: "#BEE7F3",
					200: "#82D1E9",
					300: "#41B8DD",
					400: "#2193B6",
					500: "#155E75",
					600: "#125063",
					700: "#0E3F4E",
					800: "#0B313D",
					900: "#071F27",
					950: "#05181E"
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		addDynamicIconSelectors(),
	],
}
