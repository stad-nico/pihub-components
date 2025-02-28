/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import { ButtonComponent } from '@pihub/components/button/button.component';
import ComponentsCategory from '../../ng-doc.category';

const ButtonPage: NgDocPage = {
	title: 'Button',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { ButtonComponent },
	playgrounds: {
		ButtonPlayground: {
			target: ButtonComponent,
			template: `<ng-doc-selector/></ng-doc-selector>`,
			defaults: {
				title: 'Example',
				style: 'primary',
				disabled: false,
			},
		},
	},
	route: 'button',
};

export default ButtonPage;
