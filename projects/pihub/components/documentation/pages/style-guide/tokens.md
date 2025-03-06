---
title: Tokens
route: tokens
keyword: Tokens
---

This page describes the design tokens. These tokens should be used in the development to ensure a consistent and intuitive design.
It is always good practice to introduce new design tokens for common elements that will be used in multiple components.

If you need component specific tokens please add these under `*Tokens#Components`.

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

### Size

| Token            | Preview                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `--size-text-12` | <p style="font-size: var(--size-text-12); line-height: var(--size-text-12)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-14` | <p style="font-size: var(--size-text-14); line-height: var(--size-text-14)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-16` | <p style="font-size: var(--size-text-16); line-height: var(--size-text-16)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-20` | <p style="font-size: var(--size-text-20); line-height: var(--size-text-20)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-24` | <p style="font-size: var(--size-text-24); line-height: var(--size-text-24)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-28` | <p style="font-size: var(--size-text-28); line-height: var(--size-text-28)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-32` | <p style="font-size: var(--size-text-32); line-height: var(--size-text-32)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-40` | <p style="font-size: var(--size-text-40); line-height: var(--size-text-40)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |
| `--size-text-48` | <p style="font-size: var(--size-text-48); line-height: var(--size-text-48)">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz</p> |


### Text

| Token                    | Preview                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `--color-text-primary`   | <div class="color-token" style="background-color: var(--color-text-primary)"></div>   |
| `--color-text-secondary` | <div class="color-token" style="background-color: var(--color-text-secondary)"></div> |
| `--color-text-tertiary`  | <div class="color-token" style="background-color: var(--color-text-tertiary)"></div>  |
| `--color-text-highlight` | <div class="color-token" style="background-color: var(--color-text-highlight)"></div> |

## Components

### Button

| Token                                    | Preview                                                                                              |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Primary**                              |                                                                                                      |
| `--color-button-primary`                 | <div class="color-token" style="background-color: var(--color-button-primary)"></div>                |
| `--color-button-primary-hover`           | <div class="color-token" style="background-color: var(--color-button-primary-hover)"></div>          |
| `--color-button-primary-disabled`        | <div class="color-token" style="background-color: var(--color-button-primary-disabled)"></div>       |
| `--color-button-primary-text`            | <div class="color-token" style="background-color: var(--color-button-primary-text)"></div>           |
| **Secondary**                            |                                                                                                      |
| `--color-button-secondary`               | <div class="color-token" style="background-color: var(--color-button-secondary)"></div>              |
| `--color-button-secondary-hover`         | <div class="color-token" style="background-color: var(--color-button-secondary-hover)"></div>        |
| `--color-button-secondary-disabled`      | <div class="color-token" style="background-color: var(--color-button-secondary-disabled)"></div>     |
| `--color-button-secondary-text`          | <div class="color-token" style="background-color: var(--color-button-secondary-text)"></div>         |
| `--color-button-secondary-disabled-text` | <div class="color-token" style="background-color: var(--color-button-secondary-disabled-text)"><div> |
| **Tertiary**                             |                                                                                                      |
| `--color-button-tertiary-text`           | <div class="color-token" style="background-color: var(--color-button-tertiary-text)"></div>          |
| `--color-button-tertiary-disabled-text`  | <div class="color-token" style="background-color: var(--color-button-tertiary-disabled-text)"></div> |
