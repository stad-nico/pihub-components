/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import { BreadcrumbsComponent } from '@pihub/components/breadcrumbs/breadcrumbs.component';
import ComponentsCategory from '../../ng-doc.category';

const BreadcrumbsPage: NgDocPage = {
	title: 'Breadcrumbs',
	mdFile: './index.md',
	category: ComponentsCategory,
	playgrounds: {
		BreadcrumbsPlayground: {
			target: BreadcrumbsComponent,
			template: `<ng-doc-selector/></ng-doc-selector>`,
			defaults: {
				crumbs: [
					{ id: '0', name: 'Holiday' },
					{ id: '1', name: 'Photos' },
					{ id: '2', name: 'Greek' },
				],
			},
		},
	},
	route: 'breadcrumbs',
};

export default BreadcrumbsPage;
