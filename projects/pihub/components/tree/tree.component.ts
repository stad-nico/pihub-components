/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, computed, contentChild, model } from '@angular/core';
import { TreeNodeComponent } from './components/tree-node.component';
import { TreeNodeDirective } from './directives/tree-node.directive';
import { TreeNode, TreeRoot } from './models/tree-node';

@Component({
	standalone: true,
	selector: 'pihub-tree',
	templateUrl: './tree.component.html',
	styleUrl: './tree.component.scss',
	imports: [TreeNodeComponent],
})
export class TreeComponent<Node extends TreeNode> {
	/**
	 * The list of all the nodes.
	 */
	public readonly nodes = model<Array<Node>>([]);

	/**
	 * The list of the expanded node ids.
	 */
	public readonly expandedIds = model<Array<string>>([]);

	/**
	 * The id of the selected node.
	 */
	public readonly selectedId = model<string | null>(null);

	/**
	 * The directive of the template.
	 */
	private readonly treeNodeDirective = contentChild.required(TreeNodeDirective);

	/**
	 * The signal to compute the template from the directive.
	 * @internal
	 */
	protected readonly template = computed(() => this.treeNodeDirective().template);

	/**
	 * The signal to compute the root nodes.
	 * @internal
	 */
	protected readonly rootNodes = computed(() => this.nodes().filter((node) => !node.parentId || node.parentId === TreeRoot));

	/**
	 * Select and expand a child node.
	 *
	 * @param id the id of the node
	 */
	protected select(id: string): void {
		this.expandedIds.update((expandedIds) => [...expandedIds, id]);
		this.selectedId.set(id);
	}
}
