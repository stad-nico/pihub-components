import { Component, HostBinding, HostListener, input, output } from '@angular/core';

@Component({
	standalone: true,
	selector: 'pihub-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
	public readonly checked = input.required<boolean>();

	public readonly onClick = output();

	@HostBinding('class')
	public get className() {
		return this.checked() ? 'checked' : 'unchecked';
	}

	@HostListener('click')
	private onClickHandler() {
		this.onClick.emit();
	}
}
