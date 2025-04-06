/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { house } from '@pihub/components/icons/solid';
import { Divider, SidebarEntry } from '@pihub/components/sidebar/models/sidebar-entry';
import { SidebarComponent } from '@pihub/components/sidebar/sidebar.component';

@Component({
	selector: 'pihub-sidebar-demo',
	templateUrl: './sidebar-demo.component.html',
	styleUrl: './sidebar-demo.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SidebarComponent],
})
export class SidebarDemoComponent {
	public readonly entries = signal<Array<SidebarEntry | Divider>>([
		{ icon: house, title: 'Home', route: '/home' },
		{ icon: house, title: 'Home', route: '/home' },
	]);
}
