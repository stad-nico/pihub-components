---
keyword: Breadcrumbs
---

This component displays breadcrumbs.

## Preview

{{ NgDocActions.playground("BreadcrumbsPlayground", {hideSidePanel: true }) }}

{{ NgDocApi.api("projects/pihub/components/breadcrumbs/breadcrumbs.component.ts#BreadcrumbsComponent") }}

## Usage

To change the appearance of a breadcrumb you can provide a custom template.
You can access the index and the current breadcrumb like this:

```html
<pihub-breadcrumbs>
	<ng-template #template let-index="index" let-crumb="breadcrumb">
		...
	</ng-template>
</pihub-breadcrumbs>
```


## Playground

{{ NgDocActions.playground("BreadcrumbsPlayground") }}
