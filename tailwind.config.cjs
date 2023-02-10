/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	fontFamily: {
		'sans': ['Ubuntu, ui-sans-serif', 'system-ui'],
		'serif': ['ui-serif', 'Georgia'],
		'mono': ['ui-monospace', 'SFMono-Regular'],
		'display': ['Oswald'],
		'body': ["Ubuntu"],
	  },
	theme: {
		extend: {},
		
	},
	plugins: [],
}
