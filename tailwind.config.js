// tailwind.config.js

module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				"blender-regular": ["blender-regular", "sans-serif"],
				"blender-medium": ["blender-medium", "sans-serif"],
				"blender-bold": ["blender-bold", "sans-serif"],
				"blender-heavy": ["blender-heavy", "sans-serif"],
			},
			colors: {
				yellow: "#fcee0a",
				blue: "#A084E8",
				offwhite: "#cbcbcb",
				error: "#fc5757",
				dblue: "#050538",
				pink: "#A855F7",
			},
			linearGradientColors: (theme) => ({
				"custom-gradient": ["180deg", "#0c0c1d", "#111132"],
			}),
		},
	},
	plugins: [require("tailwindcss-gradients")],
};
