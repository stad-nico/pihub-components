/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import { TreeDemoComponent } from '@pihub/components/tree/docs/tree-demo.component';
import ComponentsCategory from '../../documentation/categories/ng-doc.category';

const TreePage: NgDocPage = {
	title: 'Tree',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { TreeDemoComponent },
	playgrounds: {
		TreeDemoPlayground: {
			target: TreeDemoComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
			defaults: {},
		},
	},
	route: 'tree',
};

export default TreePage;
