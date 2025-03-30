/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild, inject, input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '@pihub/components/icon';
import { Divider, SidebarEntry } from './models/sidebar-entry';

@Component({
	selector: 'pihub-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent, NgTemplateOutlet],
})
export class SidebarComponent {
	public readonly entries = input<Array<SidebarEntry | Divider>>([]);

	protected readonly headerTemplate = contentChild<TemplateRef<unknown>>('headerTemplate');

	protected readonly footerTemplate = contentChild<TemplateRef<unknown>>('footerTemplate');

	protected readonly divider = Divider;

	protected readonly router = inject(Router);

	protected async onEntryClick(entry: SidebarEntry): Promise<void> {
		await this.router.navigate([entry.route]);
	}
}
