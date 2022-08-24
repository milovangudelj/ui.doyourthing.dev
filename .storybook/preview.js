import "../src/styles/globals.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	previewTabs: {
	  'storybook/docs/panel': { index: -1 },
	},
	darkMode: {
		current: 'dark',
		stylePreview: true
	}
};
