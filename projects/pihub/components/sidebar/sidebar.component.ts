/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, contentChild, inject, input, OnInit, signal, TemplateRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconComponent } from '@pihub/components/icon';
import { filter } from 'rxjs';
import { Divider, SidebarEntry } from './models/sidebar-entry';

@Component({
	selector: 'pihub-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent, NgTemplateOutlet],
})
export class SidebarComponent implements OnInit {
	/**
	 * The entries to display in the sidebar.
	 */
	public readonly entries = input<Array<SidebarEntry | Divider>>([]);

	/**
	 * The entry that is currently selected.
	 * @internal
	 */
	protected readonly selectedEntry = signal<SidebarEntry | null>(null);

	/**
	 * The optional template to use for the header.
	 * @internal
	 */
	protected readonly headerTemplate = contentChild<TemplateRef<unknown>>('headerTemplate');

	/**
	 * The optional template to use for the footer.
	 * @internal
	 */
	protected readonly footerTemplate = contentChild<TemplateRef<unknown>>('footerTemplate');

	/**
	 * The divider entry. Used to separate entries in the sidebar.
	 * @internal
	 */
	protected readonly divider = Divider;

	/**
	 * The router instance.
	 * @internal
	 */
	protected readonly router = inject(Router);

	public ngOnInit(): void {
		this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
			const entry = this.entries()
				.filter((entry) => entry !== Divider)
				.find((entry) => event.urlAfterRedirects.startsWith(entry.route));

			this.selectedEntry.set(entry ?? null);
		});
	}

	/**
	 * Handle click event on a sidebar entry.
	 * @internal
	 *
	 * @param entry the entry that was clicked
	 */
	protected async onEntryClick(entry: SidebarEntry): Promise<void> {
		await this.router.navigate([entry.route]);
	}
}
