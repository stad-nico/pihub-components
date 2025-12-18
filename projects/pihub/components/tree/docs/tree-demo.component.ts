/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { Component, model, signal } from '@angular/core';
import { TreeComponent, TreeNode, TreeNodeDirective, TreeRoot } from '@pihub/components/tree';

interface Fruit extends TreeNode {
	readonly name: string;
}

@Component({
	standalone: true,
	selector: 'pihub-tree-demo',
	templateUrl: './tree-demo.component.html',
	styleUrl: './tree-demo.component.scss',
	imports: [TreeComponent, TreeNodeDirective, NgTemplateOutlet],
})
export class TreeDemoComponent {
	public readonly nodes = signal<Array<Fruit>>([
		{ id: '0', name: 'Banana' },
		{ id: '1', name: 'Orange', parentId: '0' },
		{ id: '2', name: 'Strawberry', parentId: '0' },
		{ id: '3', name: 'Kiwi', parentId: TreeRoot },
		{ id: '4', name: 'Raspberry', parentId: '3' },
		{ id: '5', name: 'Blueberry', parentId: '3' },
		{ id: '6', name: 'Grape', parentId: '2' },
	]);

	public readonly expandedIds = model<Array<string>>([]);

	public readonly selectedId = model<string | null>(null);

	protected toggleExpanded(event: MouseEvent | KeyboardEvent, id: string): void {
		event.stopPropagation();

		if (this.expandedIds().includes(id)) {
			this.expandedIds.update((expandedIds) => expandedIds.filter((expandedId) => expandedId !== id));
		} else {
			this.expandedIds.update((expandedIds) => [...expandedIds, id]);
		}
	}
}
