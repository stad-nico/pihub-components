import type { Meta, StoryObj } from '@storybook/angular';

import { TreeListDemoNestedComponent } from './demo/tree-list-demo-nested.component';

const meta: Meta<TreeListDemoNestedComponent> = {
	title: 'Tree List/Nested',
	component: TreeListDemoNestedComponent,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TreeListDemoNestedComponent>;

export const Default: Story = {};
