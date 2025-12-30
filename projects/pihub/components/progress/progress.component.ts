/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

@Component({
	selector: 'pihub-progress',
	imports: [],
	templateUrl: './progress.component.html',
	styleUrl: './progress.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
	/**
	 * The type of the progress indicator.
	 */
	public readonly type = input<'circular'>('circular');

	/**
	 * The value of the progress indicator where 0 is 0% and 100 is 100%.
	 */
	public readonly progress = input.required<number>();

	/**
	 * The circumference of the progress indicator.
	 */
	protected readonly circumference = computed(() => 2 * Math.PI * this.radius());

	/**
	 * The stroke-dashoffset of the progress indicator.
	 */
	protected readonly strokeDashoffset = computed(
		() => this.circumference() - (Math.min(this.progress(), 100) / 100) * this.circumference()
	);

	/**
	 * The radius of the progress indicator.
	 */
	private readonly radius = signal<number>(45);
}
