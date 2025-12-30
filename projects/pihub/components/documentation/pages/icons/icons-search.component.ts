/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgDocIconComponent, NgDocInputWrapperComponent } from '@ng-doc/ui-kit';
import { IconComponent } from '@pihub/components/icon';
import { Icon } from '@pihub/components/icon/library';
import * as lightIcons from '@pihub/components/icons/light';
import * as regularIcons from '@pihub/components/icons/regular';
import * as solidIcons from '@pihub/components/icons/solid';
import * as thinIcons from '@pihub/components/icons/thin';
import { map } from 'rxjs';

@Component({
	selector: 'pihub-icons-search',
	templateUrl: './icons-search.component.html',
	styleUrl: './icons-search.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgDocInputWrapperComponent, NgDocIconComponent, IconComponent, ReactiveFormsModule, NgTemplateOutlet],
})
export class IconsSearchComponent {
	private readonly formBuilder = inject(FormBuilder);

	protected readonly formGroup = this.formBuilder.group({ filter: [''] });

	private readonly search = toSignal(this.formGroup.controls.filter.valueChanges.pipe(map((value) => value ?? '')), {
		initialValue: this.formGroup.controls.filter.value ?? '',
	});

	constructor() {
		effect(() => console.log(this.search()));
	}

	protected readonly solidIcons: Signal<Array<Icon>> = computed(() =>
		Object.values(solidIcons as Record<string, Icon>).filter((icon) => icon.name.includes(this.search().toLowerCase()))
	);

	protected readonly regularIcons: Signal<Array<Icon>> = computed(() =>
		Object.values(regularIcons as Record<string, Icon>).filter((icon) => icon.name.includes(this.search().toLowerCase()))
	);

	protected readonly lightIcons: Signal<Array<Icon>> = computed(() =>
		Object.values(lightIcons as Record<string, Icon>).filter((icon) => icon.name.includes(this.search().toLowerCase()))
	);

	protected readonly thinIcons: Signal<Array<Icon>> = computed(() =>
		Object.values(thinIcons as Record<string, Icon>).filter((icon) => icon.name.includes(this.search().toLowerCase()))
	);
}
