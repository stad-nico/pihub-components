/**-------------------------------------------------------------------------
 * Copyright (c) 2025 - Nicolas Stadler. All rights reserved.
 * Licensed under the CC BY-NC-SA 4.0 License. See the project root for more information.
 *
 * @author Nicolas Stadler
 *-------------------------------------------------------------------------*/
import { InputSignal } from '@angular/core';

type ComponentInputs<Component> = {
	[Key in keyof Component]: Component[Key] extends InputSignal<infer A> ? A : never;
};

export interface OpenModalConfig<ComponentType> {
	inputs: ComponentInputs<ComponentType>;
}
