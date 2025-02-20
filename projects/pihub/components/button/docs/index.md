---
keyword: Button
---

This component displays a simple button.

## Usage

{{ NgDocActions.playground("ButtonPlayground", {hideSidePanel: true, expanded: true, inputs: {title: "Example"} }) }}

{{ NgDocApi.api("projects/pihub/components/button/button.component.ts#ButtonComponent") }}

## Styles

<table>
	<tr>
		<th></th>
		<th>Primary</th>
		<th>Secondary</th>
		<th>Tertiary</th>
	</tr>
	<tr>
		<th>Default</th>
		<td>{{ NgDocActions.demo("ButtonComponent", {class: "center", container: false, inputs: {title: "Example", style: "primary"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonComponent", {class: "center", container: false, inputs: {title: "Example", style: "secondary"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonComponent", {class: "center", container: false, inputs: {title: "Example", style: "tertiary"} }) }}</td>
	</tr>
	<tr>
		<th>Disabled</th>
		<td>{{ NgDocActions.demo("ButtonComponent", {class: "center", container: false, inputs: {title: "Example", style: "primary",disabled: true} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonComponent", {class: "center", container: false, inputs: {title: "Example", style: "secondary",
			disabled: true} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonComponent", {class: "center", container: false, inputs: {title: "Example", style: "tertiary",
			disabled: true} }) }}</td>
	</tr>
</table>

## Playground

{{ NgDocActions.playground("ButtonPlayground") }}
