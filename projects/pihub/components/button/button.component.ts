/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { booleanAttribute, Component, computed, input, output } from '@angular/core';
import { Icon, IconComponent } from '@pihub/components/icon';

@Component({
	selector: 'pihub-button',
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
	imports: [IconComponent],
	host: {
		'(click)': 'onClick()',
		'[class]': 'class()',
	},
})
export class ButtonComponent {
	/**
	 * The title of the button.
	 */
	public readonly title = input.required<string>();

	/**
	 * The optional icon of the button.
	 */
	public readonly icon = input<Icon | null>(null);

	/**
	 * Whether the button is currently disabled.
	 */
	public readonly disabled = input(false, { transform: booleanAttribute });

	/**
	 * The variant of the button.
	 */
	public readonly variant = input<'primary' | 'secondary' | 'tertiary'>('primary');

	/**
	 * The size of the button.
	 */
	public readonly size = input<'small' | 'medium' | 'large'>('medium');

	/**
	 * Output that emits when the button is clicked.
	 */
	public readonly buttonClick = output();

	/**
	 * The size of the icon.
	 * @internal
	 */
	protected readonly iconSize = computed(() => {
		switch (this.size()) {
			case 'small':
				return '16';
			case 'medium':
				return '20';
			case 'large':
				return '24';
		}
	});

	/**
	 * The color of the icon.
	 * @internal
	 */
	protected readonly iconColor = computed(() => {
		switch (this.variant()) {
			case 'primary':
				return '--color-button-primary-text';
			case 'secondary':
				return this.disabled() ? '--color-button-secondary-disabled-text' : '--color-button-secondary-text';
			case 'tertiary':
				return this.disabled() ? '--color-button-tertiary-disabled-text' : '--color-button-tertiary-text';
		}
	});

	/**
	 * The class of the button.
	 */
	private readonly class = computed(() =>
		[this.variant(), this.size(), this.disabled() ? 'disabled' : null, this.icon() ? 'has-icon' : null].join(' ')
	);

	/**
	 * Handler that will be executed when this component is clicked.
	 */
	private onClick(): void {
		if (!this.disabled()) {
			this.buttonClick.emit();
		}
	}
}
