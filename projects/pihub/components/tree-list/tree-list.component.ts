import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChild, input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NodeDirective } from './directives/node.directive';

export const TreeRoot = 'ROOT';

export interface TreeListItem {
	readonly id: string;

	readonly childrenIds?: Array<string>;

	readonly parentId?: string;
}

@Component({
	standalone: true,
	selector: 'pihub-tree-list',
	templateUrl: './tree-list.component.html',
	styleUrl: './tree-list.component.scss',
	imports: [NgTemplateOutlet],
})
export class TreeListComponent<TreeItem extends TreeListItem> {
	public readonly items = input.required<Array<TreeItem>>();

	public readonly itemTemplate = contentChild.required<TemplateRef<unknown>>(TemplateRef);

	public readonly selectEnabled = input<boolean>(false);

	@ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

	public readonly node = contentChild.required(NodeDirective, { descendants: true });

	private readonly template = computed(() => this.node().template);

	ngAfterViewInit() {
		console.log(this.container);
		this.container.createEmbeddedView(this.template(), { $implicit: this.items()[0] });
	}
}
