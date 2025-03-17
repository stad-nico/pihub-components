/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../../documentation/categories/components/ng-doc.category';
import { ButtonDemoComponent } from './button-demo.component';

const ButtonPage: NgDocPage = {
	title: 'Button',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { ButtonDemoComponent },
	playgrounds: {
		ButtonDemoPlayground: {
			target: ButtonDemoComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
			defaults: {
				title: 'Button',
				style: 'primary',
				disabled: false,
			},
		},
	},
	route: 'button',
};

export default ButtonPage;
