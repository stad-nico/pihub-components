/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChildren, Directive, inject, input, model, signal, TemplateRef } from '@angular/core';
import { CheckboxComponent } from '@pihub/components/checkbox';

@Directive({ selector: '[columnTitle]' })
export class ColumnTitleDirective {
	public readonly title = input.required<string>({ alias: 'columnTitle' });

	public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}

interface DataGridItem {
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
			state(CheckboxAnimationState.Hidden, style({ opacity: 0, marginLeft: '-2rem' })),
			state(CheckboxAnimationState.Visible, style({ opacity: 1, marginLeft: 0 })),
			transition(`${CheckboxAnimationState.Hidden} => ${CheckboxAnimationState.Visible}`, [
				group([
					animate('0.25s ease-out', style({ opacity: 1 })),
					animate('0.3s ease', style({ marginLeft: 0 })),
				]),
			]),
			transition(`${CheckboxAnimationState.Visible} => ${CheckboxAnimationState.Hidden}`, [
				group([
					animate('0.25s 0.05s ease', style({ opacity: 0 })),
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
	public readonly columns = input.required<Array<string>>();

	/**
	 * The rows that will be displayed.
	 */
	public readonly rows = input.required<Array<Row>>();

	/**
	 * The ids of the selected rows.
	 */
	public readonly selectedIds = model<Array<string>>([]);

	/**
	 * Whether rows can be selected.
	 */
	public readonly selectEnabled = input<boolean>(false);

	/**
	 * Whether more than one row can be selected. Only takes effect if `selectEnabled` is set to `true`.
	 */
	public readonly multiselectEnabled = input<boolean>(false);

	/**
	 * The maximum of rows to be selected simultaneously.
	 */
	public readonly maxMultiselect = input<number | undefined>(undefined);

	/**
	 * Whether to show the column header.
	 */
	public readonly showHeader = input<boolean>(false);

	/**
	 * Whether all rows should be displayed on one page with endless scrolling.
	 */
	public readonly endlessScrolling = input<boolean>(true);

	/**
	 * How many rows should be shown per page. Only takes effect if `endlessScrolling` is set to `true`.
	 */
	public readonly rowsPerPage = input<number>(10);

	/**
	 * Current page. Only takes effect if `endlessScrolling` is set to `true`.
	 */
	public readonly page = model<number>(1);

	/**
	 * The id of the current hovered row. Needed for passing it to the templates so they can react to this.
	 */
	protected readonly hoveredId = signal<string | undefined>(undefined);

	/**
	 * Array of all column templates. Note that not each one of those columns will be displayed.
	 * Only those with their titles included in `columns` will be displayed.
	 */
	private readonly columnDirectives = contentChildren(ColumnTitleDirective, { descendants: true });

	protected getColumnsToDisplay(): Array<ColumnTitleDirective> {
		return this.columns()
			.map((column) => this.columnDirectives().find((directive) => directive.title() === column))
			.filter((column) => column !== undefined);
	}

	/**
	 * Get the rows to display in the table. If paging is enabled this will
	 * return only `itemsPerPage` many items. Otherwise it will return all items.
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
	 *
	 * @param id the id of the row
	 * @returns whether the row is currently selected
	 */
	protected isRowSelected(id: string): boolean {
		return this.selectedIds().includes(id);
	}

	/**
	 * Handle checkbox click event.
	 *
	 * @param id the id of the clicked checkbox
	 * @returns
	 */
	protected onCheckboxClick(id: string): void {
		if (!this.selectEnabled) {
			return;
		}

		const isAlreadySelected = this.selectedIds().includes(id);

		let newSelectedIds: Array<string> = this.selectedIds();

		if (!this.multiselectEnabled()) {
			newSelectedIds = isAlreadySelected ? [] : [id];
		} else {
			if (isAlreadySelected) {
				newSelectedIds = this.selectedIds().filter((selectedId) => selectedId !== id);
			} else if (this.maxMultiselect() === undefined || this.selectedIds().length < this.maxMultiselect()!) {
				newSelectedIds = [...this.selectedIds(), id];
			}
		}

		this.selectedIds.update(() => newSelectedIds);
	}

	protected getCheckboxAnimationState(row: Row): string {
		if (!this.selectEnabled()) {
			return CheckboxAnimationState.Hidden;
		}

		if (this.selectedIds().length > 0) {
			return CheckboxAnimationState.Visible;
		}

		return this.selectedIds().includes(row.id) ? CheckboxAnimationState.Visible : CheckboxAnimationState.Hidden;
	}

	/**
	 * Handle mouseenter event on row to set `hoveredId`.
	 *
	 * @param id the id of the row
	 */
	protected onRowMouseEnter(id: string): void {
		this.hoveredId.update(() => id);
	}

	/**
	 * Handle mouseenter event on row to reset `hoveredId`.
	 */
	protected onRowMouseLeave(): void {
		this.hoveredId.update(() => undefined);
	}
}
