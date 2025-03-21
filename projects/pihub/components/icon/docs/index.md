---
keyword: Icon
---

This component displays an icon.

## Preview

{{ NgDocActions.playground("IconPlayground", {hideSidePanel: true, inputs: {name: "house"} }) }}

{{ NgDocApi.api("projects/pihub/components/icon/icon.component.ts#IconComponent") }}

## Usage

This component accepts an `icon`, a `color` and a `size` as inputs. 
Displaying an icon is as simple as importing the icon from the correct package and passing it to the component.

```html
<pihub-icon size="24" color="black" [icon]="house" ... />
```

```ts
import { house } from '@pihub/components/icons/solid';
```

## Style

There are four styles available: `solid`, `regular`, `light` and `thin`.
Each style has its own set of icons that can be imported from `@pihub/components/icons/<style>`.

<table>
	<tr>
		<th>solid</th>
		<th>regular</th>
		<th>light</th>
		<th>thin</th>
	</tr>
	<tr>
		<td>{{ NgDocActions.demo("IconDemoComponent", {class: "center", container: false, inputs: {variant: "solid"} }) }}</td>
		<td>{{ NgDocActions.demo("IconDemoComponent", {class: "center", container: false, inputs: {variant: "regular"} }) }}</td>
		<td style="text-align: center; vertical-align: middle">Comming soon</td>
		<td style="text-align: center; vertical-align: middle">Comming soon</td>
	</tr>
</table>

## Size

## Playground

{{ NgDocActions.playground("IconPlayground") }}
