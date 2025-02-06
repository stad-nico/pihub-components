import { Component, input } from '@angular/core';
import { TreeListComponent, TreeListItem } from '../tree-list.component';

interface Fruit extends TreeListItem {
	readonly name: string;
}

@Component({
	standalone: true,
	selector: 'pihub-tree-list-demo',
	templateUrl: './tree-list-demo-flat.component.html',
	styleUrl: './tree-list-demo-flat.component.scss',
	imports: [TreeListComponent],
})
export class TreeListDemoFlatComponent {
	public readonly items = input<Array<Fruit>>([
		{ id: '0', name: 'Banana' },
		{ id: '1', name: 'Orange' },
		{ id: '2', name: 'Strawberry' },
		{ id: '3', name: 'Kiwi' },
		{ id: '4', name: 'Raspberry' },
	]);
}
