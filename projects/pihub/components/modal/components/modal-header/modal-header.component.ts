/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, inject, input } from '@angular/core';
import { IconComponent } from '../../../icon';
import { close } from '../../../icons/regular';
import { ModalComponent } from '../../modal.component';

@Component({
	selector: 'pihub-modal-header',
	templateUrl: './modal-header.component.html',
	imports: [IconComponent],
	host: {
		class: 'flex pl-4 pt-2 pr-2',
	},
})
export class ModalHeaderComponent {
	/**
	 * The parent modal component.
	 */
	protected readonly modal = inject(ModalComponent);

	/**
	 * Icons used in the component.
	 */
	protected readonly ICONS = { close };

	/**
	 * The title of the modal header.
	 */
	public readonly title = input<string>();

	/**
	 * The description of the modal header.
	 */
	public readonly description = input<string>();
}
