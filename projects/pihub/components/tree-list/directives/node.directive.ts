import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
	selector: '[node]',
})
export class NodeDirective {
	public readonly template = inject<TemplateRef<unknown>>(TemplateRef);
}
