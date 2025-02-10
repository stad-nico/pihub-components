/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, TemplateRef } from '@angular/core';
import { TreeNode } from '../models/tree-node';

@Component({
	standalone: true,
	selector: 'pihub-tree-node',
	templateUrl: './tree-node.component.html',
	styleUrl: './tree-node.component.scss',
	imports: [NgTemplateOutlet],
})
export class TreeNodeComponent<Node extends TreeNode> {
	/**
	 * The node to display.
	 */
	public readonly node = input.required<Node>();

	/**
	 * The list of all the nodes.
	 */
	public readonly nodes = input.required<Array<Node>>();

	/**
	 * The template of the node.
	 */
	public readonly template = input.required<TemplateRef<unknown>>();

	/**
	 * The signal to get the child nodes.
	 */
	protected readonly children = computed(() => this.nodes().filter((node) => this.node().childrenIds?.includes(node.id)));
}
