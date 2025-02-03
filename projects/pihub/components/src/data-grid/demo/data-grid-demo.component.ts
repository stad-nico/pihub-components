/**-------------------------------------------------------------------------
 * Copyright (c) 2024 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, input, signal } from '@angular/core';
import { ColumnTitleDirective, DataGridComponent } from '../data-grid.component';

interface User {
	readonly name: string;

	readonly age: string;

	readonly id: string;
}

@Component({
	selector: 'pihub-data-grid-demo',
	templateUrl: './data-grid-demo.component.html',
	styleUrl: './data-grid-demo.component.scss',
	imports: [DataGridComponent, ColumnTitleDirective],
})
export class DataGridDemoComponent {
	public readonly columns = input<Array<string>>(['Id', 'Name', 'Age', 'Status']);

	public readonly data = input<Array<User>>([
		{ name: 'testname', age: 'testage', id: '0' },
		{ name: 'testname', age: 'testage', id: '1' },
		{ name: 'testname', age: 'testage', id: '2' },
		{ name: 'testname', age: 'testage', id: '3' },
		{ name: 'testname', age: 'testage', id: '4' },
	]);

	public readonly selectedIds = signal([]);
}
