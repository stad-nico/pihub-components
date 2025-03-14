/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { booleanAttribute, Component, computed, input, output } from '@angular/core';

@Component({
	standalone: true,
	selector: 'pihub-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss',
	host: {
		'(click)': 'onClick()',
		'[class]': 'class()',
	},
})
export class CheckboxComponent {
	/**
	 * Whether the checkbox is currently checked.
	 */
	public readonly checked = input(false, { transform: booleanAttribute });

	/**
	 * The output that will fire if this checkbox is clicked.
	 */
	public readonly checkboxClicked = output();

	/**
	 * The class of the checkbox.
	 */
	private readonly class = computed(() => (this.checked() ? 'checked' : 'unchecked'));

	/**
	 * Handler that will be executed when this component is clicked.
	 */
	private onClick(): void {
		this.checkboxClicked.emit();
	}
}
