/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, input, output } from '@angular/core';
import { Breadcrumb, HomeBreadcrumbId } from './models/breadcrumb';

@Component({
	standalone: true,
	selector: 'pihub-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrl: './breadcrumbs.component.scss',
})
export class BreadcrumbsComponent {
	/**
	 * The crumbs to display. Note that the `home` crumb does not need to be included
	 * because it will be displayed by default.
	 */
	public readonly crumbs = input<Array<Breadcrumb>>([]);

	/**
	 * The event emitter that fires if the user clicks on a crumb.
	 */
	public readonly onClick = output<string>();

	/**
	 * The id of the `home` crumb.
	 */
	protected readonly HomeId = HomeBreadcrumbId;
}
