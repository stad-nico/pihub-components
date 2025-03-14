/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, computed, input } from '@angular/core';
import { house } from '@pihub/components/icons/solid';
import { ButtonComponent } from '../button.component';

@Component({
	selector: 'pihub-button-demo',
	imports: [ButtonComponent],
	templateUrl: './button-demo.component.html',
	styleUrl: './button-demo.component.scss',
})
export class ButtonDemoComponent {
	public readonly title = input<string>('Button');

	public readonly icon = input<'house' | 'none'>('house');

	public readonly disabled = input(false);

	public readonly variant = input<'primary' | 'secondary' | 'tertiary'>('primary');

	public readonly size = input<'small' | 'medium' | 'large'>('medium');

	protected readonly actualIcon = computed(() => (this.icon() === 'house' ? house : null));
}
