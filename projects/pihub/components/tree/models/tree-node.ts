/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
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
	readonly childrenIds?: Array<string>;

	/**
	 * Whether the node has children. This can be used instead
	 * of the `childrenIds` when the children are not known.
	 */
	readonly hasChildren?: boolean;

	/**
	 * The id of the parent node. Set to `TreeRoot` or leave undefined for the node to be a root node.
	 */
	readonly parentId?: string;
}
