/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit, output, Type, viewChild, ViewContainerRef } from '@angular/core';
import { AbstractModalComponent } from './abstract-modal.component';

export interface ModalData<Component extends AbstractModalComponent> {
	component: Type<Component>;
	inputs?: Record<string, unknown>;
	size?: 'small' | 'medium';
}

@Component({
	selector: 'pihub-modal',
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.css',
	host: {
		'[class]': '`${this.class} flex bg-background-primary overflow-hidden rounded-2xl`',
	},
})
export class ModalComponent<CloseData, Component extends AbstractModalComponent<CloseData>> implements OnInit {
	readonly #dialogRef = inject(DialogRef);
	readonly #data = inject<ModalData<Component>>(DIALOG_DATA);

	protected readonly modalContent = viewChild('modalContent', { read: ViewContainerRef });

	public readonly closeModal = output<CloseData>();

	public readonly dismissModal = output();

	readonly #size = this.#data.size ?? 'small';

	protected readonly class = this.#size;

	public ngOnInit(): void {
		const modalContent = this.modalContent();

		if (!modalContent) {
			return;
		}

		const { component, inputs } = this.#data;

		const componentRef = modalContent.createComponent(component);

		if (inputs) {
			for (const [key, value] of Object.entries(inputs)) {
				componentRef.setInput(key, value);
			}
		}

		this.closeModal.subscribe((data: CloseData) => this.#dialogRef.close(data));
		this.dismissModal.subscribe(() => this.#dialogRef.close());
	}
}
