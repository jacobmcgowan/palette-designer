import { Injectable } from '@angular/core';
import { Color as FormColor } from '@angular-material-components/color-picker';

import { ColorState, Color } from '../../../store';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ColorConverterService {
  /**
   * Converts a paint color to a form color.
   * @param color The color to convert.
   */
  paintToForm(color: Color): FormColor {
    return new FormColor(
      color.r,
      color.g,
      color.b,
      color.a,
    );
  }

  /**
   * Converts a form color to a paint color.
   * @param color The color to convert.
   */
  formToPaint(color: FormColor): Color {
    return new ColorState(color as Color);
  }

  /**
   * Checks if the given colors match.
   * @param color The paint color to compare.
   * @param formColor The form color to compare.
   * @returns Whether the colors match or not.
   */
  matches(color: Color, formColor: FormColor): boolean {
    return color.r === formColor.r &&
      color.g === formColor.g &&
      color.b === formColor.b &&
      color.a === formColor.a;
  }

  /**
   * Sets the value of a form control.
   * @param control The form control to set the value of.
   * @param color The color to set.
   */
  setForm(control: AbstractControl, color: Color): void {
    if (!this.matches(color, control.value)) {
      control.setValue(this.paintToForm(color), { emitEvent: false });
    }
  }
}
