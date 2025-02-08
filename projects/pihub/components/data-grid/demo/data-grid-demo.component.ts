/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, input, model } from '@angular/core';
import { Column, DataGridComponent, EmptyState } from '@pihub/components/data-grid';

interface User {
	readonly name: string;

	readonly age: string;

	readonly id: string;
}

@Component({
	selector: 'pihub-data-grid-demo',
	templateUrl: './data-grid-demo.component.html',
	styleUrl: './data-grid-demo.component.scss',
	imports: [DataGridComponent, Column, EmptyState],
})
export class DataGridDemoComponent {
	public readonly columns = input<Array<string>>([]);

	public readonly rows = input<Array<User>>([]);

	public readonly selectedIds = model<Array<string>>([]);
}
