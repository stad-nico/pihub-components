---
keyword: Data Grid
---

This component displays data as rows in a grid.

## Usage

{{ NgDocActions.demo("DataGridDemoComponent", {expanded: true, defaultTab: "HTML"}) }}

{{ NgDocApi.api("projects/pihub/components/data-grid/data-grid.component.ts#DataGridComponent") }}

## Columns

### Title

Each column needs a title which **must** be unique. This title must be set using the `column` attribute on the template like this:

```html
<pihub-data-grid>
	<ng-template column="Username" let-user>
		...
	</ng-template>
</pihub-data-grid>
```

> **Note**
> You need to import the `ColumnDirective` from `@pihub/components/data-grid`

This title will be displayed as the header of the column if `showHeader` is set to `true`.
Note that the title will not be formatted any further so you have to do this yourself.

### Width

By default each column has a size of `1fr`. However this can be configured by setting the `width` attribute on the template like this:

```html
<pihub-data-grid>
	<ng-template column="Username" width="50px" let-user>
		...
	</ng-template>
</pihub-data-grid>
```

> **Note**
> You need to import the `ColumnDirective` from `@pihub/components/data-grid`

Any value that can be used inside the `grid-template-columns` is also valid here.

### Order

The order of the columns can be configured with `columnTitles` property which accepts an array of the titles of the columns.
The order of this array determines in which order the columns will be displayed from left to right.
Note that you can intentionally leave out specific titles to exclude columns from the view which can be handy if you want the user to be able to configure this themselves.

## Empty state

The empty state can be configured by passing in an empty template like this:

```html
<pihub-data-grid>
	...
	<ng-template emptyState>
		This will be displayed if there are no items.
	</ng-template>
</pihub-data-grid>
```

> **Note**
> You need to import the `EmptyStateDirective` from `@pihub/components/data-grid`

## Playground

{{ NgDocActions.playground("DataGridDemoPlayground") }}
