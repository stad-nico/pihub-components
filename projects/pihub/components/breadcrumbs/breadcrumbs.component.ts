/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, input, TemplateRef } from '@angular/core';
import { Breadcrumb } from './models/breadcrumb';

@Component({
	standalone: true,
	selector: 'pihub-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrl: './breadcrumbs.component.css',
	imports: [NgTemplateOutlet],
})
export class BreadcrumbsComponent<T extends Breadcrumb> {
	/**
	 * The array of breadcrumbs.
	 */
	public readonly crumbs = input<Array<T>>([]);

	/**
	 * The template used for rendering each breadcrumb.
	 * @internal
	 */
	protected readonly template = contentChild.required<TemplateRef<unknown>>('template');
}
