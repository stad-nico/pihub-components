/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from './library';

@Component({
	selector: 'pihub-icon',
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss',
	host: {
		'[style.width.px]': 'width()',
		'[style.height.px]': 'height()',
	},
})
export class IconComponent {
	/**
	 * The icon to display.
	 */
	public readonly icon = input.required<Icon>();

	/**
	 * The color of the icon.
	 * This can be any valid css color or variable.
	 */
	public readonly color = input.required<string>();

	/**
	 * The size of the icon.
	 */
	public readonly size = input<'16' | '20' | '24' | '28' | '32' | '40' | '48'>('24');

	/**
	 * The sanitizer to sanitize the svg content.
	 */
	private readonly sanitizer = inject(DomSanitizer);

	/**
	 * The svg content of the icon.
	 * @internal
	 */
	protected readonly svg = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.icon().svg));

	/**
	 * The width of the icon.
	 * @internal
	 */
	protected readonly width = computed(() => (this.icon().aspectRatio < 1 ? +this.size() * this.icon().aspectRatio : this.size()));

	/**
	 * The height of the icon.
	 * @internal
	 */
	protected readonly height = computed(() => (this.icon().aspectRatio > 1 ? this.size() : +this.size() / this.icon().aspectRatio));

	/**
	 * The fill of the icon.
	 * @internal
	 */
	protected readonly fill = computed(() => (this.color().startsWith('--') ? `var(${this.color()})` : this.color()));
}
