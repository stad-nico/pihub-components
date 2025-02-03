import type { Meta, StoryObj } from '@storybook/angular';

import { TreeListDemoFlatComponent } from './demo/tree-list-demo-flat.component';

const meta: Meta<TreeListDemoFlatComponent> = {
	title: 'Tree List/Flat',
	component: TreeListDemoFlatComponent,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TreeListDemoFlatComponent>;

export const Default: Story = {};
