import type { Meta, StoryObj } from '@storybook/angular';

import { DataGridDemoComponent } from './demo/data-grid-demo.component';

const meta: Meta<DataGridDemoComponent> = {
	title: 'Data Grid',
	component: DataGridDemoComponent,
	tags: ['autodocs'],
	argTypes: {
		columns: {
			control: 'object',
		},
	},
};

export default meta;
type Story = StoryObj<DataGridDemoComponent>;

export const Default: Story = {};
