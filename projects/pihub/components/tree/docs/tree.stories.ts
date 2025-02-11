/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import type { Meta, StoryObj } from '@storybook/angular';
import { TreeDemoComponent } from './tree-demo.component';

const meta: Meta<TreeDemoComponent> = {
	title: 'Tree',
	component: TreeDemoComponent,
};

export default meta;
type Story = StoryObj<TreeDemoComponent>;

export const Default: Story = {};
