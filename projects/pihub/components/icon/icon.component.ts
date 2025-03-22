/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { Component, computed, inject, input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Icon } from './library';

@Component({
	selector: 'pihub-icon',
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss',
	host: {
		'[style.width.px]': 'width()',
		'[style.height.px]': 'height()',
		'(mouseenter)': 'onMouseEnter()',
		'(mouseleave)': 'onMouseLeave()',
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
	 * The color of the icon when hovered.
	 */
	public readonly hoverColor = input<string>();

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
	protected readonly width = computed(() => (this.icon().aspectRatio < 1 ? +this.size() * this.icon().aspectRatio : +this.size()));

	/**
	 * The height of the icon.
	 * @internal
	 */
	protected readonly height = computed(() => (this.icon().aspectRatio < 1 ? +this.size() : +this.size() / this.icon().aspectRatio));

	/**
	 * The fill of the icon.
	 * @internal
	 */
	protected readonly fill = computed(() => {
		const color = this.hovering() ? (this.hoverColor() ?? this.color()) : this.color();

		return color.startsWith('--') ? `var(${color})` : color;
	});

	/**
	 * Whether the icon is currently hovered.
	 */
	private readonly hovering = signal<boolean>(false);

	private onMouseEnter(): void {
		this.hovering.set(true);
	}

	private onMouseLeave(): void {
		this.hovering.set(false);
	}
}
