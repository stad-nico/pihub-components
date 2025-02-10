/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
export const TreeRoot = 'ROOT';

export interface TreeNode {
	/**
	 * The id of the node.
	 */
	readonly id: string;

	/**
	 * The list of child ids.
	 */
	readonly childrenIds?: string[];

	/**
	 * The id of the parent node. Set to `TreeRoot` or leave undefined for the node to be a root node.
	 */
	readonly parentId?: string;
}
