---
keyword: Button
---

This component displays a simple button.

## Preview

{{ NgDocActions.playground("ButtonDemoPlayground", {hideSidePanel: true, expanded: true, inputs: {title: "Button"} }) }}

{{ NgDocApi.api("projects/pihub/components/button/button.component.ts#ButtonComponent") }}

## Variants

<table>
	<tr>
		<th></th>
		<th>Primary</th>
		<th>Secondary</th>
		<th>Tertiary</th>
	</tr>
	<tr>
		<th>Default</th>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "primary"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "secondary"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "tertiary"} }) }}</td>
	</tr>
	<tr>
		<th>Disabled</th>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "primary", disabled: true} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "secondary", disabled: true} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "tertiary", disabled: true} }) }}</td>
	</tr>
</table>

## Size

<table>
	<tr>
		<th></th>
		<th>Primary</th>
		<th>Secondary</th>
		<th>Tertiary</th>
	</tr>
	<tr>
		<th>Small</th>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "primary", size: "small"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "secondary", size: "small"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "tertiary", size: "small"} }) }}</td>
	</tr>
	<tr>
		<th>Medium</th>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "primary", size: "medium"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "secondary", size: "medium"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "tertiary", size: "medium"} }) }}</td>
	</tr>
	<tr>
		<th>Large</th>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "primary", size: "large"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "secondary", size: "large"} }) }}</td>
		<td>{{ NgDocActions.demo("ButtonDemoComponent", {class: "center", container: false, inputs: {variant: "tertiary", size: "large"} }) }}</td>
	</tr>
</table>

## Playground

{{ NgDocActions.playground("ButtonDemoPlayground") }}
