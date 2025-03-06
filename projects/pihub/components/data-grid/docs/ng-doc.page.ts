/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import { DataGridDemoComponent } from '@pihub/components/data-grid/docs/data-grid-demo.component';
import ComponentsCategory from '../../documentation/categories/ng-doc.category';

const DataGridPage: NgDocPage = {
	title: 'Data Grid',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { DataGridDemoComponent },
	playgrounds: {
		DataGridDemoPlayground: {
			target: DataGridDemoComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
			defaults: {},
		},
	},
	route: 'data-grid',
};

export default DataGridPage;
