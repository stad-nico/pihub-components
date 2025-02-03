/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { animate, group, style, transition, trigger } from '@angular/animations';
import { NgTemplateOutlet } from '@angular/common';
import {
	Component,
	computed,
	contentChildren,
	Directive,
	inject,
	input,
	model,
	signal,
	TemplateRef,
} from '@angular/core';
import { CheckboxComponent } from '../checkbox';

@Directive({ selector: '[columnTitle]' })
export class ColumnTitleDirective {
	public readonly title = input.required<string>({ alias: 'columnTitle' });

	public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}

@Component({
	selector: 'pihub-data-grid',
	templateUrl: './data-grid.component.html',
	styleUrl: './data-grid.component.scss',
	imports: [NgTemplateOutlet, CheckboxComponent],
	animations: [
		trigger('checkboxFade', [
			transition(':enter', [
				style({ marginLeft: '-2rem', opacity: 0 }),
				group([
					animate('0.25s ease-out', style({ opacity: 1 })),
					animate('0.3s ease', style({ marginLeft: 0 })),
				]),
			]),
			transition(':leave', [
				style({ marginLeft: 0, opacity: 1 }),
				group([
					animate('0.25s 0.05s ease', style({ opacity: 0 })),
					animate('0.3s ease', style({ marginLeft: '-2rem' })),
				]),
			]),
		]),
	],
})
export class DataGridComponent<T extends { readonly id: string }> {
	public readonly columns = input.required<Array<string>>();

	public readonly data = input.required<Array<T>>();

	public readonly selectedIds = model<Array<string>>([]);

	public readonly selectEnabled = input<boolean>(false);

	public readonly multiselectEnabled = input<boolean>(false);

	public readonly maxMultiselect = input<number | undefined>(undefined);

	public readonly showHeader = input<boolean>(false);

	public readonly endlessScrolling = input<boolean>(true);

	public readonly itemsPerPage = input<number>(10);

	public readonly page = model<number>(1);

	protected readonly hoveredId = signal<string | undefined>(undefined);

	protected readonly showCheckboxes = computed(() => this.selectEnabled() && this.selectedIds().length > 0);

	private readonly columnDirectives = contentChildren(ColumnTitleDirective, { descendants: true });

	protected getColumnsToDisplay(): Array<ColumnTitleDirective> {
		return this.columns()
			.map((column) => this.columnDirectives().find((directive) => directive.title() === column))
			.filter((column) => column !== undefined);
	}

	protected getRows(): Array<T> {
		if (this.endlessScrolling()) {
			return this.data();
		}

		const start = (this.page() - 1) * this.itemsPerPage();

		return this.data().slice(start, start + this.itemsPerPage());
	}

	protected isRowSelected(id: string): boolean {
		return this.selectedIds().includes(id);
	}

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

	protected onRowMouseEnter(id: string): void {
		this.hoveredId.update(() => id);
	}

	protected onRowMouseLeave(): void {
		this.hoveredId.update(() => undefined);
	}
}
