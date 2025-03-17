/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../../documentation/categories/components/ng-doc.category';
import { InputDemoComponent } from './input-demo.component';

const InputPage: NgDocPage = {
	title: 'Input',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { InputDemoComponent },
	playgrounds: {
		InputPlayground: {
			target: InputDemoComponent,
			template: `<ng-doc-selector></ng-doc-selector>`,
		},
	},
	route: 'input',
};

export default InputPage;
