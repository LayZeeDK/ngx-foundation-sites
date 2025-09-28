import type { BooleanInput } from '@angular/cdk/coercion';
import { coerceBooleanProperty as cdkCoerceBooleanProperty } from '@angular/cdk/coercion';

export function coerceBooleanProperty(value: BooleanInput): boolean {
  return cdkCoerceBooleanProperty(value);
}
