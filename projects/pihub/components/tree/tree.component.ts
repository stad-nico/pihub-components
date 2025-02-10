/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, computed, contentChild, input } from '@angular/core';
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
	public readonly nodes = input<Array<Node>>([]);

	/**
	 * The directive of the template.
	 */
	private readonly treeNodeDirective = contentChild.required(TreeNodeDirective);

	/**
	 * The signal to compute the template from the directive.
	 */
	protected readonly template = computed(() => this.treeNodeDirective().template);

	/**
	 * The signal to compute the root nodes.
	 */
	protected readonly rootNodes = computed(() => this.nodes().filter((node) => !node.parentId || node.parentId === TreeRoot));
}
