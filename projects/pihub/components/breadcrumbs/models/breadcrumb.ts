/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
export interface Breadcrumb {
	/**
	 * The id that uniquely identifies this breadcrumb.
	 */
	readonly id: string;

	/**
	 * The name of the breadcrumb.
	 */
	readonly name: string;
}

export const HomeBreadcrumbId = 'HOME';
