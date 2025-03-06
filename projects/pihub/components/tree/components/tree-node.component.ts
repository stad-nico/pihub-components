/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, HostListener, input, model, output, TemplateRef, viewChild } from '@angular/core';
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
	 * The list of the expanded node ids.
	 */
	public readonly expandedIds = model<Array<string>>([]);

	/**
	 * The id of the selected node.
	 */
	public readonly selectedId = model<string | null>(null);

	/**
	 * The template of the node.
	 */
	public readonly template = input.required<TemplateRef<unknown>>();

	/**
	 * The event emitter triggered when this node was clicked.
	 */
	public readonly nodeSelected = output();

	/**
	 * The signal to get the child nodes.
	 * @internal
	 */
	protected readonly children = computed(() => this.nodes().filter((node) => this.node().childrenIds?.includes(node.id)));

	/**
	 * The signal to get the context that will be passed to the node template.
	 * @internal
	 */
	protected readonly templateContext = computed(() => ({
		$implicit: {
			...this.node(),
			hasChildren: this.children().length > 0,
			isSelected: this.selectedId() === this.node().id,
			isExpanded: this.expandedIds().includes(this.node().id),
			children: this.childrenTemplate(),
		},
	}));

	/**
	 * The signal to get the children template.
	 */
	private readonly childrenTemplate = viewChild.required<TemplateRef<unknown>>('childrenTemplate');

	/**
	 * Select and expand a child node.
	 *
	 * @param id the id of the node
	 */
	protected select(id: string): void {
		this.expandedIds.update((expandedIds) => [...expandedIds, id]);
		this.selectedId.set(id);
	}

	@HostListener('click', ['$event'])
	private onClickHandler(event: Event): void {
		event.stopPropagation();

		this.nodeSelected.emit();
	}
}
