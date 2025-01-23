import { provideAnimations } from '@angular/platform-browser/animations';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { applicationConfig, type Preview } from '@storybook/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		applicationConfig({
			providers: [provideAnimations()],
		}),
	],
};

export default preview;
