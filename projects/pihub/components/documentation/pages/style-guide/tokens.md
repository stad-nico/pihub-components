---
title: Tokens
route: tokens
keyword: Tokens
---

This page describes the design tokens. These tokens should be used in the development to ensure a consistent and intuitive design.
It is always good practice to introduce new design tokens for common elements that will be used in multiple components.

All of these tokens can be used with tailwind. Just omit the `--color-` prefix.
Example: `--color-background-primary` can be used with `bg-background-primary`.

## Surfaces

### Background

| Token                          | Preview                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------- |
| `--color-background-primary`   | <div class="color-token" style="background-color: var(--color-background-primary)"></div>   |
| `--color-background-secondary` | <div class="color-token" style="background-color: var(--color-background-secondary)"></div> |
| `--color-background-tertiary`  | <div class="color-token" style="background-color: var(--color-background-tertiary)"></div>  |

### Container

| Token                              | Preview                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------- |
| `--color-container-active`         | <div class="color-token" style="background-color: var(--color-container-active)"></div>         |
| `--color-container-hover`          | <div class="color-token" style="background-color: var(--color-container-hover)"></div>          |
| `--color-container-selected`       | <div class="color-token" style="background-color: var(--color-container-selected)"></div>       |
| `--color-container-selected-hover` | <div class="color-token" style="background-color: var(--color-container-selected-hover)"></div> |

## Text

| Token                    | Preview                                                                  |
| ------------------------ | ------------------------------------------------------------------------ |
| `--color-text-primary`   | <p class="color-token" style="color: var(--color-text-primary)">Aa</p>   |
| `--color-text-secondary` | <p class="color-token" style="color: var(--color-text-secondary)">Aa</p> |
| `--color-text-tertiary`  | <p class="color-token" style="color: var(--color-text-tertiary)">Aa</p>  |
| `--color-text-highlight` | <p class="color-token" style="color: var(--color-text-highlight)">Aa</p> |
