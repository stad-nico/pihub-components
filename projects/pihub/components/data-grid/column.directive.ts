/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the MIT License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Directive, inject, input, TemplateRef } from '@angular/core';

@Directive({ selector: '[column]' })
export class Column {
	public readonly title = input.required<string>({ alias: 'column' });

	public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}
