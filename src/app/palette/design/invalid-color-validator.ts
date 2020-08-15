import { IColor } from '../../store';
import { ValidatorFn } from '@angular/forms';

export const invalidColorValidator: ValidatorFn = control => {
  const valid = control.value &&
    control.value.r != null &&
    control.value.g != null &&
    control.value.b != null &&
    control.value.a != null;
  return valid ? null : { invalidColor: { value: control.value } };
};
