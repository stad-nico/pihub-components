/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../../documentation/categories/ng-doc.category';
import { SidebarDemoComponent } from './sidebar-demo.component';

const SidebarPage: NgDocPage = {
	title: 'Sidebar',
	mdFile: './index.md',
	category: ComponentsCategory,
	demos: { SidebarDemoComponent },
	playgrounds: {},
	route: 'sidebar',
};

export default SidebarPage;
