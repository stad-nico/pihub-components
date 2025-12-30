/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, computed, input } from '@angular/core';
import { IconComponent } from '@pihub/components/icon/icon.component';
import { house as regularHouse } from '@pihub/components/icons/regular';
import { house as solidHouse } from '@pihub/components/icons/solid';

@Component({
	selector: 'pihub-icon-demo.component',
	templateUrl: './icon-demo.component.html',
	styleUrl: './icon-demo.component.css',
	imports: [IconComponent],
})
export class IconDemoComponent {
	public readonly size = input<'16' | '20' | '24' | '28' | '32' | '40' | '48'>('24');

	public readonly variant = input<'solid' | 'regular'>('solid');

	public readonly color = input<'black' | '--color-primary-500'>('black');

	public readonly hoverColor = input<'grey' | '--color-primary-400'>('grey');

	public readonly icon = computed(() => {
		switch (this.variant()) {
			case 'solid':
				return solidHouse;
			case 'regular':
				return regularHouse;
		}
	});
}
