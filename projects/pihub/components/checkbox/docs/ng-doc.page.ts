/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import { CheckboxComponent } from '@pihub/components/checkbox/checkbox.component';
import ComponentsCategory from '../../documentation/categories/ng-doc.category';

const CheckboxPage: NgDocPage = {
	title: 'Checkbox',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { CheckboxComponent },
	playgrounds: {
		CheckboxPlayground: {
			target: CheckboxComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
			defaults: {
				checked: false,
			},
		},
	},
	route: 'checkbox',
};

export default CheckboxPage;
