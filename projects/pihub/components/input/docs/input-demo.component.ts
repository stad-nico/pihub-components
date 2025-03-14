/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { folder } from '@pihub/components/icons/solid';
import { InputComponent } from '../input.component';

@Component({
	selector: 'pihub-input-demo',
	imports: [InputComponent],
	templateUrl: './input-demo.component.html',
	styleUrl: './input-demo.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDemoComponent {
	public readonly placeholder = input<string>('Directory name');

	public readonly variant = input<'modern' | 'minimalistic'>('modern');

	public readonly icon = input<'folder' | 'none'>('folder');

	public readonly disabled = input(false);

	public readonly actualIcon = computed(() => (this.icon() === 'folder' ? folder : null));
}
