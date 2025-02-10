/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import type { Meta, StoryObj } from '@storybook/angular';

import { DataGridDemoComponent } from './data-grid-demo.component';

const meta: Meta<DataGridDemoComponent> = {
	title: 'Data Grid',
	component: DataGridDemoComponent,
	tags: ['autodocs'],
	argTypes: {
		columns: {
			control: 'object',
			rows: 'object',
		},
	},
};

export default meta;
type Story = StoryObj<DataGridDemoComponent>;

export const Default: Story = {
	args: {
		columns: ['Name', 'Id', 'Age', 'Status'],
		rows: [
			{ name: 'testname', age: 'testage', id: '0' },
			{ name: 'testname', age: 'testage', id: '1' },
			{ name: 'testname', age: 'testage', id: '2' },
			{ name: 'testname', age: 'testage', id: '3' },
			{ name: 'testname', age: 'testage', id: '4' },
		],
		selectedIds: ['0', '2', '3'],
	},
};

export const Empty: Story = {
	args: {
		columns: ['Name', 'Id', 'Age', 'Status'],
		rows: [],
		selectedIds: [],
	},
};
