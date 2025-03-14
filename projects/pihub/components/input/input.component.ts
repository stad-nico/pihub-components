/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { booleanAttribute, Component, computed, input } from '@angular/core';
import { IconComponent } from '@pihub/components/icon';
import { Icon } from '../icon/library';

@Component({
	selector: 'pihub-input',
	imports: [IconComponent],
	templateUrl: './input.component.html',
	styleUrl: './input.component.scss',
	host: {
		'[class]': 'class()',
	},
})
export class InputComponent {
	/**
	 * The placeholder of the input.
	 */
	public readonly placeholder = input<string>('');

	/**
	 * The variant of the input.
	 */
	public readonly variant = input<'modern' | 'minimalistic'>('modern');

	/**
	 * The optional icon of the input.
	 */
	public readonly icon = input<Icon | null>(null);

	/**
	 * Whether the input is currently disabled.
	 */
	public readonly disabled = input(false, { transform: booleanAttribute });

	/**
	 * The class of the input.
	 */
	private readonly class = computed(() =>
		[this.variant(), this.disabled() ? 'disabled' : null, this.icon() ? 'has-icon' : null].join(' ')
	);
}
