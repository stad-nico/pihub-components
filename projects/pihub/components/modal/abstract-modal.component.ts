/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModalComponent } from './modal.component';

@Component({
	template: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export abstract class AbstractModalComponent<CloseData = unknown> {
	readonly #modalComponent = inject<ModalComponent<CloseData, AbstractModalComponent<CloseData>>>(ModalComponent);

	public dismissModal(): void {
		this.#modalComponent.dismissModal.emit();
	}

	public closeModal(data: CloseData): void {
		this.#modalComponent.closeModal.emit(data);
	}
}
