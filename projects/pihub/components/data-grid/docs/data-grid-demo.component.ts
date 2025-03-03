/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, input, signal } from '@angular/core';
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
	public readonly maxSelection = input<number>(-1);

	public readonly showHeader = input<boolean>(false);

	public readonly endlessScrolling = input<boolean>(true);

	public readonly rowsPerPage = input<number>(10);

	public readonly page = input<number>(1);

	protected readonly columns = signal<Array<string>>(['Name', 'Id', 'Age', 'Status']);

	protected readonly rows = signal<Array<User>>([
		{ name: 'testname', age: 'testage', id: '0' },
		{ name: 'testname', age: 'testage', id: '1' },
		{ name: 'testname', age: 'testage', id: '2' },
		{ name: 'testname', age: 'testage', id: '3' },
		{ name: 'testname', age: 'testage', id: '4' },
	]);

	protected readonly selectedIds = signal<Array<string>>([]);
}
