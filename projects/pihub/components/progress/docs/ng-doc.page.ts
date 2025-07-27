/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import { ProgressComponent } from '@pihub/components/progress/progress.component';
import ComponentsCategory from '../../documentation/categories/ng-doc.category';

const ProgressPage: NgDocPage = {
	title: 'Progress',
	mdFile: './index.md',
	category: ComponentsCategory,
	playgrounds: {
		ProgressPlayground: {
			target: ProgressComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
			defaults: {
				type: 'circular',
				progress: 20,
			},
		},
	},
	route: 'progress',
};

export default ProgressPage;
