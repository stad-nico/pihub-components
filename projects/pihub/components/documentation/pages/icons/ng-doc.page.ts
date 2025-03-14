/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import { IconsSearchComponent } from './icons-search.component';

const IconsPage: NgDocPage = {
	title: 'Icons',
	mdFile: './index.md',
	route: 'icons',
	demos: { IconsSearchComponent },
	order: 1,
};

export default IconsPage;
