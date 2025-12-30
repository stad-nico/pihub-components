/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@pihub/components/button';
import { AbstractModalComponent } from '../abstract-modal.component';
import { ModalBodyComponent } from '../components/modal-body/modal-body.component';
import { ModalFooterComponent } from '../components/modal-footer/modal-footer.component';
import { ModalHeaderComponent } from '../components/modal-header/modal-header.component';
import { ModalService } from '../modal.service';

@Component({
	selector: 'pihub-modal-demo',
	templateUrl: './modal-demo.component.html',
	imports: [ButtonComponent],
})
export class ModalDemoComponent {
	readonly #modalService = inject(ModalService);

	public openModal(): void {
		this.#modalService.open(ExampleModalComponent);
	}
}

@Component({
	selector: 'pihub-example-modal',
	template: ` <pihub-modal-header title="Example Modal" description="This is an example modal." />
		<pihub-modal-body>
			<p>This is the content of the example modal.</p>
		</pihub-modal-body>
		<pihub-modal-footer>
			<pihub-button title="Abbrechen" (buttonClick)="dismissModal()" variant="secondary" size="small" />
			<pihub-button title="Speichern" (buttonClick)="closeModal()" size="small" />
		</pihub-modal-footer>`,
	imports: [ModalBodyComponent, ModalHeaderComponent, ModalFooterComponent, ButtonComponent],
})
export class ExampleModalComponent extends AbstractModalComponent<void> {}
