/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, HostListener, input, output, signal, TemplateRef, viewChild } from '@angular/core';
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
	 * The id of the selected node.
	 */
	public readonly selectedId = input<string | undefined>();

	/**
	 * The event emitter triggered when this node was clicked.
	 */
	public readonly onClick = output();

	/**
	 * The signal to get the child nodes.
	 */
	protected readonly children = computed(() => this.nodes().filter((node) => this.node().childrenIds?.includes(node.id)));

	/**
	 * The signal to get the context that will be passed to the node template.
	 */
	protected readonly templateContext = computed(() => ({
		$implicit: {
			...this.node(),
			hasChildren: this.children().length > 0,
			isCollapsed: this.isCollapsed(),
			isSelected: this.selectedId() === this.node().id,
			children: this.childrenTemplate(),
		},
	}));

	/**
	 * The signal to get the children template.
	 */
	private readonly childrenTemplate = viewChild.required<TemplateRef<unknown>>('childrenTemplate');

	private readonly isCollapsed = signal(true);

	@HostListener('click', ['$event'])
	private onClickHandler(e: Event): void {
		e.stopPropagation();
		this.isCollapsed.update(() => false);
	}
}
