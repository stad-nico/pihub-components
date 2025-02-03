import { NgTemplateOutlet } from '@angular/common';
import { Component, input } from '@angular/core';
import { NestedTreeNodeComponent } from '../components/nested-tree-node/nested-tree-node.component';
import { TreeListComponent, TreeListItem, TreeRoot } from '../tree-list.component';
import { NodeDirective } from './../directives/node.directive';

interface Fruit extends TreeListItem {
	readonly name: string;
}

@Component({
	standalone: true,
	selector: 'pihub-tree-list-demo',
	templateUrl: './tree-list-demo-nested.component.html',
	styleUrl: './tree-list-demo-nested.component.scss',
	imports: [TreeListComponent, NgTemplateOutlet, NestedTreeNodeComponent, NodeDirective],
})
export class TreeListDemoNestedComponent {
	public readonly items = input<Array<Fruit>>([
		{ id: '0', name: 'Banana', childrenIds: ['1', '2'] },
		{ id: '1', name: 'Orange', parentId: '0' },
		{ id: '2', name: 'Strawberry', parentId: '0' },
		{ id: '3', name: 'Kiwi', childrenIds: ['4', '5'], parentId: TreeRoot },
		{ id: '4', name: 'Raspberry', parentId: '3' },
		{ id: '5', name: 'Blueberry', parentId: '3' },
	]);

	public getChildren(id: string) {
		return this.items().filter((item) => item.parentId === id);
	}
}
