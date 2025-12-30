/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component } from '@angular/core';

@Component({
	selector: 'pihub-modal-footer',
	templateUrl: './modal-footer.component.html',
	host: {
		class: 'flex justify-end gap-2 items-center p-4 bg-secondary overflow-hidden mt-auto shrink-0',
	},
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ModalFooterComponent {}
