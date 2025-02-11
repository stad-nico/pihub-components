/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { BreadcrumbsComponent } from '@pihub/components/breadcrumbs/breadcrumbs.component';
import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta<BreadcrumbsComponent> = {
	title: 'Breadcrumbs',
	component: BreadcrumbsComponent,
};

export default meta;
type Story = StoryObj<BreadcrumbsComponent>;

export const Default: Story = {
	args: {
		crumbs: [
			{ id: '0', name: 'Photos' },
			{ id: '1', name: 'Holiday 2025' },
			{ id: '2', name: 'Germany' },
			{ id: '3', name: 'Highlights' },
		],
	},
};
