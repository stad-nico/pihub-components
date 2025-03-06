/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({ selector: '[column]' })
export class ColumnDirective {
	/**
	 * The title of the column.
	 */
	public readonly title = input.required<string>({ alias: 'column' });

	/**
	 * The width of the column.
	 */
	public readonly width = input<string>('1fr');

	/**
	 * The template that will be displayed in the column.
	 */
	public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}
