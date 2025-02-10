/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
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
	public readonly nodes = input<Array<Fruit>>([
		{ id: '0', name: 'Banana', childrenIds: ['1', '2'] },
		{ id: '1', name: 'Orange', parentId: '0' },
		{ id: '2', name: 'Strawberry', parentId: '0' },
		{ id: '3', name: 'Kiwi', childrenIds: ['4', '5'], parentId: TreeRoot },
		{ id: '4', name: 'Raspberry', parentId: '3' },
		{ id: '5', name: 'Blueberry', parentId: '3' },
	]);
}
