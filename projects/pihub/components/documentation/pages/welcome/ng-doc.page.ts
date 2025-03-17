/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocPage } from '@ng-doc/core';
import IntroductionCategory from '@pihub/components/documentation/categories/introduction/ng-doc.category';

const WelcomePage: NgDocPage = {
	title: 'Welcome',
	category: IntroductionCategory,
	mdFile: './index.md',
	order: 0,
};

export default WelcomePage;
