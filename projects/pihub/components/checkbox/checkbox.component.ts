/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, HostBinding, HostListener, input, output } from '@angular/core';

@Component({
	standalone: true,
	selector: 'pihub-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
	/**
	 * Whether the checkbox is currently checked.
	 */
	public readonly checked = input<boolean>(false);

	/**
	 * The output that will fire if this checkbox is clicked.
	 */
	public readonly click = output<void>();

	/**
	 * Set the class name depending on `checked`.
	 */
	@HostBinding('class')
	private get className(): string {
		return this.checked() ? 'checked' : 'unchecked';
	}

	/**
	 * Listener that executes when this component is clicked.
	 */
	@HostListener('click')
	private onClickHandler(): void {
		this.click.emit();
	}
}
