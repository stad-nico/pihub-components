/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
	title: 'API Reference',
	scopes: [
		{
			name: 'Components',
			route: 'test',
			include: './**/*.component.ts',
		},
	],
};

export default Api;
