/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Icon } from '@pihub/components/icon';

export interface SidebarEntry {
	/**
	 * The icon of the entry.
	 */
	readonly icon: Icon;

	/**
	 * The title of the entry.
	 */
	readonly title: string;

	/**
	 * The route of the entry.
	 */
	readonly route: string;
}

export const Divider = 'divider';

export type Divider = typeof Divider;
