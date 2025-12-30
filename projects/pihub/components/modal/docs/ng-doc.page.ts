/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../../documentation/categories/ng-doc.category';
import { ModalDemoComponent } from './modal-demo.component';

const InputPage: NgDocPage = {
	title: 'Modal',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { ModalDemoComponent },
	playgrounds: {
		ModalPlayground: {
			target: ModalDemoComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
		},
	},
	route: 'modal',
};

export default InputPage;
