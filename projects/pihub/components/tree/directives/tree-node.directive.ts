/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
	selector: '[treeNode]',
})
export class TreeNodeDirective {
	/**
	 * The template of the node.
	 */
	public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}
