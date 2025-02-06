import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-controls',
	],
	framework: {
		name: '@storybook/angular',
		options: {},
	},
};
export default config;
