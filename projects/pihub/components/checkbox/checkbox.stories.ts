import { type Meta, type StoryObj } from '@storybook/angular';
import { CheckboxComponent } from '.';

const meta: Meta<CheckboxComponent> = {
	title: 'Checkbox',
	component: CheckboxComponent,
	argTypes: {
		onClick: { action: 'onClick' },
	},
};

export default meta;

export const Unchecked: StoryObj<CheckboxComponent> = {
	args: {
		checked: false,
	},
};

export const Checked: StoryObj<CheckboxComponent> = {
	args: {
		checked: true,
	},
};
