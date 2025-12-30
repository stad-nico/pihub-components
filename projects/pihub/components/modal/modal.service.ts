/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Dialog } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';
import { AbstractModalComponent } from './abstract-modal.component';
import { ModalComponent, ModalData } from './modal.component';
import { OpenModalConfig } from './types/open-modal-config';

@Injectable({ providedIn: 'root' })
export class ModalService {
	readonly #dialog = inject(Dialog);

	public open<Component extends AbstractModalComponent>(component: ComponentType<Component>, config?: OpenModalConfig<Component>): void {
		const wrapperData: ModalData<Component> = {
			component,
			inputs: config?.inputs as Record<string, unknown>,
		};

		this.#dialog.open(ModalComponent, {
			data: wrapperData,
			autoFocus: 'first-heading',
		});
	}
}
