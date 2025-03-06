/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, HostBinding, HostListener, input, output } from '@angular/core';

@Component({
	selector: 'pihub-button',
	templateUrl: './button.component.html',
	styleUrl: './button.component.scss',
	imports: [],
})
export class ButtonComponent {
	/**
	 * The title of the button.
	 */
	public readonly title = input.required<string>();

	/**
	 * Whether the button is currently disabled.
	 */
	public readonly disabled = input<boolean>(false);

	/**
	 * The style of the button.
	 */
	public readonly style = input<'primary' | 'secondary' | 'tertiary'>('primary');

	/**
	 * Output that emits when the button is clicked.
	 */
	public readonly buttonClick = output();

	@HostBinding('class')
	private get className() {
		return [this.style(), this.disabled() ? 'disabled' : null].join(' ');
	}

	@HostListener('click')
	private onClick() {
		if (!this.disabled()) {
			this.buttonClick.emit();
		}
	}
}
