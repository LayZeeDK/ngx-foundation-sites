import { BooleanInput, coerceBooleanProperty as cdkCoerceBooleanProperty } from '@angular/cdk/coercion';

export function coerceBooleanProperty(value: BooleanInput): boolean {
  return cdkCoerceBooleanProperty(value);
}
