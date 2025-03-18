/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';
import {
	booleanAttribute,
	Component,
	computed,
	contentChild,
	contentChildren,
	input,
	model,
	numberAttribute,
	output,
	signal,
} from '@angular/core';
import { CheckboxComponent } from '@pihub/components/checkbox';
import { ColumnDirective } from './directives/column.directive';
import { EmptyStateDirective } from './directives/empty-state.directive';

export interface DataGridItem {
	readonly id: string;
}

enum CheckboxAnimationState {
	Hidden = 'hidden',
	Visible = 'visible',
}

@Component({
	standalone: true,
	selector: 'pihub-data-grid',
	templateUrl: './data-grid.component.html',
	styleUrl: './data-grid.component.scss',
	imports: [NgTemplateOutlet, CheckboxComponent],
	animations: [
		trigger('checkboxFade', [
			state(CheckboxAnimationState.Hidden, style({ display: 'none', opacity: 0, marginLeft: '-2rem' })),
			state(CheckboxAnimationState.Visible, style({ display: 'flex', opacity: 1, marginLeft: 0 })),
			transition(`${CheckboxAnimationState.Hidden} => ${CheckboxAnimationState.Visible}`, [
				group([animate('0.25s ease-out', style({ display: 'flex', opacity: 1 })), animate('0.3s ease', style({ marginLeft: 0 }))]),
			]),
			transition(`${CheckboxAnimationState.Visible} => ${CheckboxAnimationState.Hidden}`, [
				group([
					animate('0.25s 0.05s ease', style({ display: 'none', opacity: 0 })),
					animate('0.3s ease', style({ marginLeft: '-2rem' })),
				]),
			]),
		]),
	],
})
export class DataGridComponent<Row extends DataGridItem> {
	/**
	 * The titles of the columns. The columns will be displayed in the order of this array.
	 */
	public readonly columnTitles = input.required<Array<string>>();

	/**
	 * The rows that will be displayed.
	 */
	public readonly rows = input.required<Array<Row>>();

	/**
	 * The ids of the selected rows.
	 */
	public readonly selectedIds = input<Array<string>>([]);

	/**
	 * Whether to show the column header.
	 */
	public readonly showHeader = input(false, { transform: booleanAttribute });

	/**
	 * Whether all rows should be displayed on one page with endless scrolling.
	 */
	public readonly endlessScrolling = input(true, { transform: booleanAttribute });

	/**
	 * How many rows should be shown per page. Only takes effect if `endlessScrolling` is set to `false`.
	 */
	public readonly rowsPerPage = input(10, { transform: numberAttribute });

	/**
	 * Current page. Only takes effect if `endlessScrolling` is set to `false`.
	 */
	public readonly page = model<number>(1);

	/**
	 * Emits the id of the row that was clicked.
	 */
	public readonly rowClick = output<string>();

	/**
	 * The id of the current hovered row. Needed for passing it to the templates so they can react to this.
	 * @internal
	 */
	protected readonly hoveredId = signal<string | null>(null);

	/**
	 * The template that should be displayed if no rows are being displayed.
	 * @internal
	 */
	protected readonly emptyTemplate = contentChild(EmptyStateDirective);

	/**
	 * The grid template columns.
	 * @internal
	 */
	protected readonly gridTemplateColumns = computed(() =>
		this.getColumnsToDisplay()
			.map((column) => column.width())
			.join(' ')
	);

	/**
	 * Array of all columns. Note that not each one of those columns will be displayed.
	 * Only those with their titles included in `columnTitles` will be displayed.
	 */
	private readonly columns = contentChildren(ColumnDirective, { descendants: true });

	/**
	 * Get the columns to display in the table. This depends on the titles set in `columnTitles` and their order.
	 * @internal
	 *
	 * @returns the columns to display
	 */
	protected getColumnsToDisplay(): Array<ColumnDirective> {
		return this.columnTitles()
			.map((columnTitle) => this.columns().find((column) => column.title() === columnTitle))
			.filter((column) => column !== undefined);
	}

	/**
	 * Get the rows to display in the table. If paging is enabled this will
	 * return only `itemsPerPage` many items. Otherwise it will return all items.
	 * @internal
	 *
	 * @returns the rows to display
	 */
	protected getRows(): Array<Row> {
		if (this.endlessScrolling()) {
			return this.rows();
		}

		const start = (this.page() - 1) * this.rowsPerPage();

		return this.rows().slice(start, start + this.rowsPerPage());
	}

	/**
	 * Whether the row with `id` is currently selected.
	 * @internal
	 *
	 * @param id the id of the row
	 * @returns whether the row is currently selected
	 */
	protected isRowSelected(id: string): boolean {
		return this.selectedIds().includes(id);
	}

	/**
	 * Handle row click event.
	 * @internal
	 *
	 * @param id the id of the clicked row
	 */
	protected onRowClick(id: string): void {
		this.rowClick.emit(id);
	}

	/**
	 * Get the animation state of the checkboxes.
	 * @internal
	 *
	 * @returns the animation state
	 */
	protected getCheckboxAnimationState(): string {
		return this.selectedIds().length > 0 ? CheckboxAnimationState.Visible : CheckboxAnimationState.Hidden;
	}

	/**
	 * Handle mouseenter event on row to set `hoveredId`.
	 * @internal
	 *
	 * @param id the id of the row
	 */
	protected onRowMouseEnter(id: string): void {
		this.hoveredId.set(id);
	}

	/**
	 * Handle mouseenter event on row to reset `hoveredId`.
	 * @internal
	 */
	protected onRowMouseLeave(): void {
		this.hoveredId.set(null);
	}
}
