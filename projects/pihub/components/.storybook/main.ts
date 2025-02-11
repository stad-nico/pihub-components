/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
	stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-controls',
		'@storybook/addon-storysource',
	],
	framework: {
		name: '@storybook/angular',
		options: {},
	},
};
export default config;
