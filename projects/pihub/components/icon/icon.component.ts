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
	styleUrl: './icon.component.css',
	host: {
		'(mouseenter)': 'hovering.set(true)',
		'(mouseleave)': 'hovering.set(false)',
		'[class.full]': "size() === 'full'",
	},
})
export class IconComponent {
	/**
	 * The sanitizer to sanitize the svg content.
	 */
	readonly #sanitizer = inject(DomSanitizer);

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
	public readonly size = input<'16' | '20' | '22' | '24' | '28' | '32' | '40' | '48' | 'full'>('24');

	/**
	 * Whether the icon is currently hovered.
	 * @internal
	 */
	protected readonly hovering = signal<boolean>(false);

	/**
	 * The svg content of the icon.
	 * @internal
	 */
	protected readonly svg = computed(() => this.#sanitizer.bypassSecurityTrustHtml(this.icon().svg));

	/**
	 * The width of the icon.
	 * @internal
	 */
	protected readonly width = computed(() => {
		const size = this.size();

		if (size === 'full') {
			return undefined;
		}

		const { aspectRatio } = this.icon();

		return aspectRatio < 1 ? +size * aspectRatio : +size;
	});

	/**
	 * The height of the icon.
	 * @internal
	 */
	protected readonly height = computed(() => {
		const size = this.size();

		if (size === 'full') {
			return undefined;
		}

		const { aspectRatio } = this.icon();

		return aspectRatio < 1 ? +size : +size / aspectRatio;
	});

	/**
	 * The fill of the icon.
	 * @internal
	 */
	protected readonly fill = computed(() => {
		const color = this.hovering() ? (this.hoverColor() ?? this.color()) : this.color();

		return color.startsWith('--') ? `var(${color})` : color;
	});
}
