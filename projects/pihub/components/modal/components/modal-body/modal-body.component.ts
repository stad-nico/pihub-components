/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component } from '@angular/core';

@Component({
	selector: 'pihub-modal-body',
	templateUrl: './modal-body.component.html',
	host: {
		class: 'block m-4 flex-grow overflow-scroll',
	},
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ModalBodyComponent {}
