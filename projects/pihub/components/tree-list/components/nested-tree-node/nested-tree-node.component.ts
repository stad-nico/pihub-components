import { contentChild, Directive } from '@angular/core';

@Directive({
	selector: 'pihub-nested-tree-node',
})
export class NestedTreeNodeComponent {
	public readonly container = contentChild('children');

	ngAfterViewInit() {
		console.log(this.container());
	}
}
