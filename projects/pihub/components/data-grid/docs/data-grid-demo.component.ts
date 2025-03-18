/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { booleanAttribute, Component, input, numberAttribute, signal } from '@angular/core';
import { ColumnDirective, DataGridComponent, DataGridItem, EmptyStateDirective } from '@pihub/components/data-grid';

interface User extends DataGridItem {
	readonly name: string;

	readonly age: string;
}

@Component({
	selector: 'pihub-data-grid-demo',
	templateUrl: './data-grid-demo.component.html',
	styleUrl: './data-grid-demo.component.scss',
	imports: [DataGridComponent, ColumnDirective, EmptyStateDirective],
})
export class DataGridDemoComponent {
	public readonly showHeader = input(false, { transform: booleanAttribute });

	public readonly endlessScrolling = input(true, { transform: booleanAttribute });

	public readonly rowsPerPage = input(10, { transform: numberAttribute });

	public readonly page = input(1, { transform: numberAttribute });

	protected readonly columns = signal<Array<string>>(['Name', 'Id', 'Age', 'Status']);

	protected readonly rows = signal<Array<User>>([
		{ name: 'testname', age: 'testage', id: '0' },
		{ name: 'testname', age: 'testage', id: '1' },
		{ name: 'testname', age: 'testage', id: '2' },
		{ name: 'testname', age: 'testage', id: '3' },
		{ name: 'testname', age: 'testage', id: '4' },
	]);

	protected readonly selectedIds = signal<Array<string>>([]);

	protected rowClick(id: string): void {
		this.selectedIds.update((selectedIds) =>
			selectedIds.includes(id) ? selectedIds.filter((selectedId) => selectedId !== id) : [...selectedIds, id]
		);
	}
}
