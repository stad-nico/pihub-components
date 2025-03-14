/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from './../../documentation/categories/ng-doc.category';
import { IconDemoComponent } from './icon-demo.component';

const IconPage: NgDocPage = {
	title: 'Icon',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { IconDemoComponent },
	playgrounds: {
		IconPlayground: {
			target: IconDemoComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
		},
	},
	route: 'icon',
};

export default IconPage;
